import React from 'react';
import {CardInnerLine} from './index.style';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import {TextAreaField, TextField} from "../component/field";
import Card from "../component/card";


const Profile: React.FC = () => {

  return (
    <Card title={RESUME_COMPONENT_NAME.PROFILE}>
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
    </Card>
  )
}

export default Profile;

