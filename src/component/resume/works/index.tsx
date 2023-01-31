import React, {useContext, useState} from 'react';
import {ResumeContext} from "../../../page/Resume/resumeContext";
import Header from "../header";
import {Button, Card, List} from "antd";
import {getYearAndMonth} from "../../../utils";
import WorkForm from "./workForm";

const Works: React.FC = () => {

  const {resume} = useContext(ResumeContext);
  const {workExperiences} = resume;
  const [isOpen, setIsOpen] = useState(true);


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
                <List.Item actions={
                  [<Button key={index} type="link">Edit</Button>, <Button key={index} type="link" danger>Delete</Button>]}>
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
      <WorkForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        workExperience={workExperiences[0]} handleSave={(workExperience) => {
        console.log(workExperience)
      }}/>
    </>

  )
}

export default Works;

