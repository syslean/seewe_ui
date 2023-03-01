import React from "react";
import {PreviewContainer} from "./index.style";

const Preview: React.FC = () => {

  return (
    <PreviewContainer>
    <svg width="210mm" height="297mm" viewBox="0 0 210 297">
      <rect x="0" y="0" width="210" height="297" fill="#FFFFFF" />
      <text x="105" y="148.5" text-anchor="middle" font-size="6">
        <tspan x="105" dy="-1.2em">We hold these truths to be self-evident, that all men are created equal,</tspan>
        <tspan x="105" dy="1.2em">that they are endowed by their Creator with certain unalienable Rights,</tspan>
        <tspan x="105" dy="1.2em">that among these are Life, Liberty and the pursuit of Happiness.</tspan>
      </text>
      <text x="105" y="280" text-anchor="middle" font-size="4">
        Signed by: John Hancock, Charles Thomson, and fifty-five others.
      </text>
    </svg>
    </PreviewContainer>

  )
}

export default Preview;
