import React from 'react';
import {CardHeader, CardContainer, CardInnerLine} from './index.style';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import {TextAreaField, TextField} from "../component/field";


const Profile: React.FC = () => {

  return (
    <>
      <CardHeader>{RESUME_COMPONENT_NAME.PROFILE}</CardHeader>
      <CardContainer>
        <CardInnerLine>
          <TextField title="Full Name" value="Seewe Jean"/>
          <TextField title="Title" value="Lead experience designer"/>
        </CardInnerLine>
        <CardInnerLine>
          <TextField title="Mobile Phone" value="+1 676 256 867"/>
          <TextField title="Email Address" value="jean@seewe.com"/>
        </CardInnerLine>
        <CardInnerLine>
          <TextAreaField title="About Me" value="The greatest designer in the world"/>
        </CardInnerLine>
      </CardContainer>
    </>
  )
}

export default Profile;

