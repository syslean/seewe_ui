import React from "react";
import {PreviewContainer} from "./index.style";
import {jsPDF} from "jspdf";
import {PDFObject} from "react-pdfobject";
import {BitterBold, InterBold, InterRegular, InterSemibold} from "../../assets/font/fonts";
import useLocalStorage from "../../service/useLocalStorage";
import {TwLogo} from "../../assets/img/base64/tw-logo";

const LEFT_MARGIN = 15;
const TOP_MARGIN = 30;
const MAXIMUM_HEIGHT = 265;
const FONT_SIZE = {
  HEAD: 32,
  TITLE: 18,
  SUBTITLE: 16,
  BODY: 11,
}

const Preview: React.FC = () => {

  const [profile] = useLocalStorage<{ name?: string, title?: string, about?: string }>('profile');
  let top = TOP_MARGIN;
  const doc = new jsPDF()

  const stepForward = (step: number) => {
    if (top + step > MAXIMUM_HEIGHT) {
      doc.addImage(TwLogo, LEFT_MARGIN, 278, 42, 7)
      doc.addPage();
      top = TOP_MARGIN;
    }
    top += step;
  }

  doc.addFileToVFS('Bitter-bold.ttf', BitterBold);
  doc.addFont('Bitter-bold.ttf', 'Bitter', 'bold');
  doc.addFileToVFS('Inter-regular.ttf', InterRegular);
  doc.addFont('Inter-regular.ttf', 'Inter', 'regular');
  doc.addFileToVFS('Inter-semibold.ttf', InterSemibold);
  doc.addFont('Inter-semibold.ttf', 'Inter', 'semibold');
  doc.addFileToVFS('Inter-bold.ttf', InterBold);
  doc.addFont('Inter-bold.ttf', 'Inter', 'bold');

  doc.setFont('Bitter', "bold");
  doc.setFontSize(FONT_SIZE.HEAD);
  doc.text(profile.name || "Name", LEFT_MARGIN, top)

  doc.setFont('Inter', "bold");
  doc.setTextColor("#F2617A")
  doc.setFontSize(FONT_SIZE.TITLE)
  stepForward(10)
  doc.text(profile.title || "Title", LEFT_MARGIN, top)

  doc.setFont('Inter', "regular");
  doc.setTextColor("#000")
  doc.setFontSize(FONT_SIZE.BODY)

  const about = profile.about || "About"
  stepForward(10)

  about.split("\n").map((paragraph) => {
    const words = paragraph.split(" ");
    let line = ""
    words.map((word) => {
      if (doc.getTextWidth(line + word) > 185) {
        doc.text(line, LEFT_MARGIN, top);
        stepForward(5)
        line = `${word} `;
      } else {
        line += `${word} `;
      }
    })
    if (line != "") {
      doc.text(line, LEFT_MARGIN, top);
      stepForward(5)
      line = "";
    }
    stepForward(3)
  })

  doc.addImage(TwLogo, LEFT_MARGIN, 278, 42, 7)
  return (
    <PreviewContainer>
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
    </PreviewContainer>
  )
}

export default Preview;
