import React from "react";
import {ActionBarWrapper, ActionItem} from "./index.style";
import {useNavigate} from "react-router-dom";

const ActionBar: React.FC = () => {
  const navigate = useNavigate();
  const returnToEdit = () => {
    navigate('/');
  }

  return (
    <ActionBarWrapper>
      <ActionItem onClick={returnToEdit}>Return to edit</ActionItem>
    </ActionBarWrapper>
  )
};

export default ActionBar;
