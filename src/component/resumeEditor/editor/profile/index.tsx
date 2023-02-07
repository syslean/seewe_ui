import React, {ChangeEvent, useContext} from 'react';
import {TextAreaField, TextField} from "../component/field";
import Card from "../component/card";
import {LanguageContext} from "../../../../context/LanguageContext";
import useLocalStorage from "../../../../service/useLocalStorage";
import {ResumeKey} from "../../../../constants/enums";
import {Inline} from '../component/field/index.style';

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
  const [profile, setProfile] = useLocalStorage<Profile>(ResumeKey.profile, {} as Profile);

  const handleChangeValue = (key: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setProfile({
    ...profile,
    [key]: e.target.value
  });

  return (
    <Card title={t(PROFILE_LABEL.KEY)}>
      <Inline>
        <TextField title={t(PROFILE_LABEL.NAME)} value={profile.name} onChange={handleChangeValue("name")}/>
        <TextField title={t(PROFILE_LABEL.TITLE)} value={profile.title} onChange={handleChangeValue("title")}/>
      </Inline>
      <Inline>
        <TextField title={t(PROFILE_LABEL.PHONE)} value={profile.phone} onChange={handleChangeValue("phone")}/>
        <TextField title={t(PROFILE_LABEL.EMAIL)} value={profile.email} onChange={handleChangeValue("email")}
        />
      </Inline>
      <Inline>
        <TextAreaField title={t(PROFILE_LABEL.ABOUT)} value={profile.about} onChange={handleChangeValue("about")}/>
      </Inline>
    </Card>
  )
}

export default Profile;

