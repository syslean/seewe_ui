import React, {useContext, useState} from 'react';
import {ResumeContext} from "../../../page/Resume/resumeContext";
import Header from "../header";
import {Card, List} from "antd";
import WorkForm from "./workForm";
import WorkItem from "./WorkItem";

const Works: React.FC = () => {

  const {resume, updateWorkExperience} = useContext(ResumeContext);
  const {workExperiences} = resume;
  const [showEditForm, setShowEditForm] = useState(false);

  const [currentWorkExperience, setCurrentWorkExperience] = useState<WorkExperienceModal>({} as WorkExperienceModal);

  const handleClick = (id: string) => {
    const work = workExperiences.find((item) => item.id === id);
    if (work) {
      setCurrentWorkExperience(work);
      setShowEditForm(true);
    }
    // not find handle
  }

  return (
    <>
      <Card>
        <Header title="WorkExperiences" description="Record your past work experiences"/>
        <List
          itemLayout="horizontal"
          dataSource={workExperiences}
          renderItem={(workExperience, index) => <WorkItem key={index} workExperience={workExperience}
                                                           handleClick={handleClick}/>}
        />
      </Card>
      {
        showEditForm &&
        <WorkForm
          setShowEditForm={setShowEditForm}
          workExperience={currentWorkExperience} handleSave={updateWorkExperience}/>
      }
    </>

  )
}

export default Works;

