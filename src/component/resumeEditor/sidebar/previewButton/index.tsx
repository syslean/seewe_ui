import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Preview} from "./index.style";
import {LanguageContext} from "../../../../context/LanguageContext";

const PreviewButton: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useContext(LanguageContext);
  const goToPreview = () => {
    navigate('/preview');
  }
  return (
    <Preview onClick={goToPreview}>{t('navigate.preview')}</Preview>
  )
};

export default PreviewButton;
