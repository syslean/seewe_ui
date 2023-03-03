import React from "react";
import {useNavigate} from "react-router-dom";
import {Preview} from "./index.style";

const PreviewButton: React.FC = () => {
  const navigate = useNavigate();
  const goToPreview = () => {
    navigate('/preview');
  }
  return (
    <Preview onClick={goToPreview}>Preview</Preview>
  )
};

export default PreviewButton;
