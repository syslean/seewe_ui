import React, {useContext} from 'react';
import {ResumeContext} from "../../../page/Resume/resumeContext";
import Header from "../header";
import {Card, List} from "antd";
import {getYearAndMonth} from "../../../utils";
import WorkForm from "./workForm";

const Works: React.FC = () => {

  const {resume} = useContext(ResumeContext);
  const {workExperiences} = resume;

  return (
    <>
      <Card>
        <Header title="WorkExperiences" description="Record your past work experiences"/>
        <List
          itemLayout="horizontal"
          dataSource={workExperiences}
          renderItem={
            (workExperience, index) => {
              const basicInfo = `${workExperience.name} - ${workExperience.position}`
              const limitDate = `${getYearAndMonth(workExperience.startDate)} - ${getYearAndMonth(workExperience.endDate)}`;
              return (
                <List.Item actions={[<a key={index}>edit</a>, <a key={index}>delete</a>]}>
                  <List.Item.Meta
                    title={basicInfo}
                    description={limitDate}
                  />
                </List.Item>
              )
            }
          }
        />
      </Card>
      <WorkForm workExperience={workExperiences[0]} handleSave={(workExperience) => {
        console.log(workExperience)
      }}/>
    </>

  )
}

export default Works;

