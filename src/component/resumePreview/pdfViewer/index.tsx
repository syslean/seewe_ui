import React, {useContext} from "react";
import {jsPDF} from "jspdf";
import {PDFObject} from "react-pdfobject";
import useLocalStorage from "../../../hook/useLocalStorage";
import {TwLogo} from "../../../assets/img/base64/tw-logo";
import {BitterBold, InterBold, InterRegular, InterSemibold} from "../../../assets/font/fonts";
import {formatDate, formatDateRange} from "../../../utils/DatetimeUtils";
import {LanguageContext} from "../../../context/LanguageContext";
import {RESUME_KEY} from "../../../constants/enums";


const LEFT_MARGIN = 15;
const TOP_MARGIN = 30;
const MAXIMUM_HEIGHT = 265;
const MAXIMUM_LINE_WIDTH = 185;
const FONT_SIZE = {
  HEAD: 32,
  TITLE: 18,
  SUBTITLE: 13,
  BODY: 11,
  FOOT: 9,
}
const SPACING = {
  EXTRA_SMALL: 3,
  SMALL: 5,
  MEDIUM: 6,
  LARGE: 8,
  EXTRA_LARGE: 12
}

enum FONT_ID {
  BITTER = 'Bitter',
  INTER = 'Inter'
}

enum FONT_STYLE {
  REGULAR = 'regular',
  BOLD = 'bold',
  SEMIBOLD = 'semibold'
}

const FONTS = [
  {
    base64: BitterBold,
    id: FONT_ID.BITTER,
    style: FONT_STYLE.BOLD
  }, {
    base64: InterRegular,
    id: FONT_ID.INTER,
    style: FONT_STYLE.REGULAR
  }, {
    base64: InterBold,
    id: FONT_ID.INTER,
    style: FONT_STYLE.BOLD
  }, {
    base64: InterSemibold,
    id: FONT_ID.INTER,
    style: FONT_STYLE.SEMIBOLD
  }]


const PDFViewer: React.FC = () => {

  const {t} = useContext(LanguageContext);

  const [profile] = useLocalStorage<{ firstname?: string, lastname?: string, title?: string, about?: string }>('profile');
  const [experiences] = useLocalStorage<{ name?: string, position?: string, period?: string[], summary?: string }[]>(RESUME_KEY.EXPERIENCES);
  const [skills] = useLocalStorage<{ type?: string, list?: string[] }[]>(RESUME_KEY.SKILLS);
  const [educations] = useLocalStorage<{ school?: string, degree?: string, period?: string[], major?: string }[]>(RESUME_KEY.EDUCATIONS);
  const [publications] = useLocalStorage<{ name?: string, type?: string, publishedAt?: string }[]>(RESUME_KEY.PUBLICATIONS);

  let top = TOP_MARGIN;
  const doc = new jsPDF();
  let pageNum = 1;

  const renderPageFooter = () => {
    doc.addImage(TwLogo, LEFT_MARGIN, 274, 42, 7)
    const font = doc.getFont();
    const fontSize = doc.getFontSize();
    const textColor = doc.getTextColor();
    doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
    doc.setTextColor("#BABABA");
    doc.setFontSize(FONT_SIZE.FOOT);
    doc.text(`© 2023 Thoughtworks Confidential | ${pageNum}`, 140, 280)
    doc.setFont(font.fontName, font.fontStyle);
    doc.setTextColor(textColor);
    doc.setFontSize(fontSize);
    pageNum++
  }

  const stepForward = (step: number) => {
    if (top + step > MAXIMUM_HEIGHT) {
      renderPageFooter();
      doc.addPage();
      top = TOP_MARGIN;
    } else {
      top += step;
    }
  }

  const renderLongText = (text: string, lineHeight: number) => {
    text.split("\n").map((paragraph) => {
      const words = paragraph.split(" ");
      let line = ""
      words.map((word) => {
        if (doc.getTextWidth(line + word) > MAXIMUM_LINE_WIDTH) {
          doc.text(line, LEFT_MARGIN, top);
          stepForward(lineHeight)
          line = `${word} `;
        } else {
          line += `${word} `;
        }
      })
      if (line.trim() !== "") {
        doc.text(line, LEFT_MARGIN, top);
        stepForward(lineHeight)
        line = "";
        stepForward(SPACING.EXTRA_SMALL)
      }
    })
  }

  const loadFont = () => {
    FONTS.forEach((font) => {
      const name = `${font.id}-${font.style}.ttf`
      doc.addFileToVFS(name, font.base64);
      doc.addFont(name, font.id, font.style);
    })
  }

  loadFont();
  doc.setFont(FONT_ID.BITTER, FONT_STYLE.BOLD);
  doc.setFontSize(FONT_SIZE.HEAD);
  const name = `${profile.firstname} ${profile.lastname}`
  doc.text(name, LEFT_MARGIN, top)

  doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
  doc.setTextColor("#F2617A")
  doc.setFontSize(FONT_SIZE.TITLE)
  stepForward(SPACING.EXTRA_LARGE)
  doc.text(profile.title || "Title", LEFT_MARGIN, top)

  doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
  doc.setTextColor("#000")
  doc.setFontSize(FONT_SIZE.BODY)

  const about = profile.about || "About"
  stepForward(SPACING.LARGE)
  renderLongText(about, SPACING.SMALL);

  if (experiences && experiences.length > 0) {
    doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
    doc.setFontSize(FONT_SIZE.TITLE);
    stepForward(SPACING.MEDIUM)
    doc.text("Thoughtworks Experience", LEFT_MARGIN, top)
    stepForward(SPACING.SMALL);
    experiences.map((experience) => {
      stepForward(SPACING.SMALL);
      doc.setFont(FONT_ID.INTER, FONT_STYLE.SEMIBOLD);
      doc.setFontSize(FONT_SIZE.SUBTITLE);
      const label = [experience.position, experience.name, formatDateRange(experience.period)].join(", ");
      renderLongText(label, SPACING.MEDIUM);
      doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
      doc.setFontSize(FONT_SIZE.BODY)
      renderLongText(experience.summary || "Summary", SPACING.SMALL);
    })
  }
  if (skills && skills.length > 0) {
    doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
    doc.setFontSize(FONT_SIZE.TITLE);
    stepForward(SPACING.SMALL)
    doc.text("Skills", LEFT_MARGIN, top)
    stepForward(SPACING.LARGE);
    skills.map((skill) => {
      doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
      doc.setFontSize(FONT_SIZE.BODY)
      renderLongText(`${skill.type || "Skill type"}: ${(skill.list || []).join(", ")}`, SPACING.SMALL);
    })
  }

  if (educations && educations.length > 0) {
    doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
    doc.setFontSize(FONT_SIZE.TITLE);
    stepForward(SPACING.SMALL)
    doc.text("Education", LEFT_MARGIN, top)
    stepForward(SPACING.LARGE);
    educations.map((education) => {
      doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
      doc.setFontSize(FONT_SIZE.BODY)
      const degree = t(`editor.educations.degreeType.${education.degree}`)
      const label = [`${degree} in ${education.major}`, education.school, formatDateRange(education.period)].join(", ")
      renderLongText(label, SPACING.SMALL);
    })
  }

  if (publications && publications.length > 0) {
    doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
    doc.setFontSize(FONT_SIZE.TITLE);
    stepForward(SPACING.SMALL)
    doc.text("Publications", LEFT_MARGIN, top)
    stepForward(SPACING.LARGE);
    publications.map((publication) => {
      doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
      doc.setFontSize(FONT_SIZE.BODY)
      const publicationType = t(`editor.publications.publicationType.${publication.type}`)
      const label = [publication.name, publicationType, formatDate(publication.publishedAt)].join(", ")
      renderLongText(label, SPACING.SMALL);
    })
  }

  renderPageFooter();

  return (
    // <PreviewContainer>
    <PDFObject
      containerProps={{height: "100%"}}
      assumptionMode={true}
      width="100%"
      height="100%"
      url={`${doc.output("dataurlstring")}#toolbar=1`}
      pdfOpenParams={{
        view: "Fit"
      }}
    />
    // </PreviewContainer>
  )
}

export default PDFViewer;
