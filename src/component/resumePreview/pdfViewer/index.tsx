import React from "react";
import {jsPDF} from "jspdf";
import {PDFObject} from "react-pdfobject";
import useLocalStorage from "../../../hook/useLocalStorage";
import {TwLogo} from "../../../assets/img/base64/tw-logo";
import {BitterBold, InterBold, InterRegular, InterSemibold} from "../../../assets/font/fonts";
import {formatDate, formatDateRange} from "../../../utils/DatetimeUtils";


const LEFT_MARGIN = 15;
const TOP_MARGIN = 30;
const MAXIMUM_HEIGHT = 265;
const MAXIMUM_LINE_WIDTH = 185;
const FONT_SIZE = {
  HEAD: 32,
  TITLE: 18,
  SUBTITLE: 14,
  BODY: 12,
  FOOT: 9,
}
const SPACING = {
  EXTRA_SMALL: 3,
  SMALL: 5,
  MEDIUM: 7,
  LARGE: 10
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

  const [profile] = useLocalStorage<{ name?: string, title?: string, about?: string }>('profile');
  const [experiences] = useLocalStorage<{ name?: string, position?: string, period?: string[], summary?: string }[]>('experiences');
  const [educations] = useLocalStorage<{ school?: string, degree?: string, period?: string[], major?: string }[]>('educations');
  const [publications] = useLocalStorage<{ name?: string, type?: string, publishedAt?: string }[]>('publications');

  let top = TOP_MARGIN;
  const doc = new jsPDF();
  let pageNum = 1;

  const renderPageFooter = () => {
    doc.addImage(TwLogo, LEFT_MARGIN, 278, 42, 7)
    const font = doc.getFont();
    const fontSize = doc.getFontSize();
    const textColor = doc.getTextColor();
    doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
    doc.setTextColor("#BABABA");
    doc.setFontSize(FONT_SIZE.FOOT);
    doc.text(`© 2023 Thoughtworks Confidential | ${pageNum}`, 140, 284)
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
  doc.text(profile.name || "Name", LEFT_MARGIN, top)

  doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
  doc.setTextColor("#F2617A")
  doc.setFontSize(FONT_SIZE.TITLE)
  stepForward(SPACING.LARGE)
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
    stepForward(SPACING.LARGE)
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

  if (educations && educations.length > 0) {
    doc.setFont(FONT_ID.INTER, FONT_STYLE.BOLD);
    doc.setFontSize(FONT_SIZE.TITLE);
    stepForward(SPACING.SMALL)
    doc.text("Education", LEFT_MARGIN, top)
    stepForward(SPACING.LARGE);
    educations.map((education) => {
      doc.setFont(FONT_ID.INTER, FONT_STYLE.REGULAR);
      doc.setFontSize(FONT_SIZE.BODY)
      const label = [`${education.degree} in ${education.major}`, education.school, formatDateRange(education.period)].join(", ")
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
      const label = [publication.name, publication.type, formatDate(publication.publishedAt)].join(", ")
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
