import React, {useContext} from "react";
import {ActionBarWrapper, ActionItem} from "./index.style";
import {useNavigate} from "react-router-dom";
import {LanguageContext} from "../../../context/LanguageContext";

const ActionBar: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useContext(LanguageContext);
  const returnToEdit = () => {
    navigate('/');
  }

  return (
    <ActionBarWrapper>
      <ActionItem onClick={returnToEdit}>{t('navigate.returnToEdit')}</ActionItem>
    </ActionBarWrapper>
  )
};

export default ActionBar;
