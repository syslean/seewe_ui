import React, {useContext} from 'react';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import {TextAreaField, TextField} from "../component/field";
import Card from "../component/card";
import {SingleFieldLayout, TwoFieldsLayout} from '../component/field/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";


const Profile: React.FC = () => {

  const {t} = useContext(LanguageContext);

  return (
    <Card title={RESUME_COMPONENT_NAME.PROFILE}>
      <TwoFieldsLayout>
        <TextField title={t("editor.profile.name")} value="Seewe Jean"/>
        <TextField title="Title" value="Lead experience designer"/>
      </TwoFieldsLayout>
      <TwoFieldsLayout>
        <TextField title="Mobile Phone" value="+1 676 256 867"/>
        <TextField title="Email Address" value="jean@seewe.com"/>
      </TwoFieldsLayout>
      <SingleFieldLayout>
        <TextAreaField title="About Me" value="The greatest designer in the world"/>
      </SingleFieldLayout>
    </Card>
  )
}

export default Profile;

