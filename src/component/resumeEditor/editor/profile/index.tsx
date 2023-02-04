import React, {useContext} from 'react';
import {TextAreaField, TextField} from "../component/field";
import Card from "../component/card";
import {SingleFieldLayout, TwoFieldsLayout} from '../component/field/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";

const PROFILE_PREFIX = "editor.profile"

const PROFILE_LABEL = {
  KEY: `${PROFILE_PREFIX}.key`,
  NAME: `${PROFILE_PREFIX}.name`,
  TITLE: `${PROFILE_PREFIX}.title`,
  PHONE: `${PROFILE_PREFIX}.phone`,
  EMAIL: `${PROFILE_PREFIX}.email`,
  ABOUT: `${PROFILE_PREFIX}.about`,
}

const Profile: React.FC = () => {

  const {t} = useContext(LanguageContext);

  return (
    <Card title={t(PROFILE_LABEL.KEY)}>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.NAME)} value="Seewe Jean"/>
        <TextField title={t(PROFILE_LABEL.TITLE)} value="Lead experience designer"/>
      </TwoFieldsLayout>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.PHONE)} value="+1 676 256 867"/>
        <TextField title={t(PROFILE_LABEL.EMAIL)} value="jean@seewe.com"/>
      </TwoFieldsLayout>
      <SingleFieldLayout>
        <TextAreaField title={t(PROFILE_LABEL.ABOUT)} value="The greatest designer in the world"/>
      </SingleFieldLayout>
    </Card>
  )
}

export default Profile;

