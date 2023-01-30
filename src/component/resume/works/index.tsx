import React, {useContext} from 'react';
import {ResumeContext} from "../../../page/Resume/ResumeContext";
import Header from "../header";

const Works: React.FC = () => {
  const {workExperiences} = useContext(ResumeContext);

  return (
    <>
      <Header title="WorkExperiences"/>
      {workExperiences.map((workExperience) => {
        return (
          <>{workExperience.name}</>
        )
      })}
    </>
  )
}

export default Works;

