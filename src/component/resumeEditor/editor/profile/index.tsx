import React, {ChangeEvent, useContext} from 'react';
import {TextAreaField, TextField} from "../component/field";
import Card from "../component/card";
import {SingleFieldLayout, TwoFieldsLayout} from '../component/field/index.style';
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";

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
  const [profile, setProfile] = useLocalStorage("profile", {} as Profile);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({...profile, name: e.target.value});
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({...profile, title: e.target.value});
  }

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({...profile, phone: e.target.value});
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({...profile, email: e.target.value});
  }

  const handleChangeAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProfile({...profile, about: e.target.value});
  }

  return (
    <Card title={t(PROFILE_LABEL.KEY)}>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.NAME)} value={profile.name} placeholder="Seewe Jean"
                   onChange={handleChangeName}/>
        <TextField title={t(PROFILE_LABEL.TITLE)} value={profile.title} placeholder="Lead experience designer"
                   onChange={handleChangeTitle}/>
      </TwoFieldsLayout>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.PHONE)} value={profile.phone} placeholder="+1 676 256 867"
                   onChange={handleChangePhone}/>
        <TextField title={t(PROFILE_LABEL.EMAIL)} value={profile.email} placeholder="jean@seewe.com"
                   onChange={handleChangeEmail}
        />
      </TwoFieldsLayout>
      <SingleFieldLayout>
        <TextAreaField title={t(PROFILE_LABEL.ABOUT)} value={profile.about}
                       placeholder="The greatest designer in the world" onChange={handleChangeAbout}/>
      </SingleFieldLayout>
    </Card>
  )
}

export default Profile;

