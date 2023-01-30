import React, {useContext} from 'react';
import {ResumeContext} from "../../../page/Resume/ResumeContext";
import Header from "../header";
import {Card} from "antd";

const Works: React.FC = () => {
  const {workExperiences} = useContext(ResumeContext);

  return (
    <Card>
      <Header title="WorkExperiences"/>
      {workExperiences.map((workExperience) => {
        return (
          <>{workExperience.name}</>
        )
      })}
    </Card>
  )
}

export default Works;

