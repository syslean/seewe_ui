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

  const handleChangeValue = (key: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setProfile({
    ...profile,
    [key]: e.target.value
  });

  return (
    <Card title={t(PROFILE_LABEL.KEY)}>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.NAME)} value={profile.name} placeholder="Seewe Jean"
                   onChange={handleChangeValue("name")}/>
        <TextField title={t(PROFILE_LABEL.TITLE)} value={profile.title} placeholder="Lead experience designer"
                   onChange={handleChangeValue("title")}/>
      </TwoFieldsLayout>
      <TwoFieldsLayout>
        <TextField title={t(PROFILE_LABEL.PHONE)} value={profile.phone} placeholder="+1 676 256 867"
                   onChange={handleChangeValue("phone")}/>
        <TextField title={t(PROFILE_LABEL.EMAIL)} value={profile.email} placeholder="jean@seewe.com"
                   onChange={handleChangeValue("email")}
        />
      </TwoFieldsLayout>
      <SingleFieldLayout>
        <TextAreaField title={t(PROFILE_LABEL.ABOUT)} value={profile.about}
                       placeholder="The greatest designer in the world" onChange={handleChangeValue("about")}/>
      </SingleFieldLayout>
    </Card>
  )
}

export default Profile;

