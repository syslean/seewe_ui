import React, {useContext} from 'react';
import {ResumeContext} from "../../../page/Resume/ResumeContext";
import Header from "../header";
import {Card, List} from "antd";
import {getYearAndMonth} from "../../../utils";

const Works: React.FC = () => {
  const {workExperiences} = useContext(ResumeContext);

  return (
    <Card>
      <Header title="WorkExperiences" description="Record your past work experiences"/>
      {/*todo: Edit and Delete Function*/}
      <List
        itemLayout="horizontal"
        dataSource={workExperiences}
        renderItem={
          (workExperience, index) => {
            const basicInfo = `${workExperience.name} - ${workExperience.position}`
            const limitDate = `${getYearAndMonth(workExperience.startDate)} - ${getYearAndMonth(workExperience.endDate)}`;
            return (
              <List.Item  actions={[<a key={index}>edit</a>, <a key={index}>delete</a>]}>
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
  )
}

export default Works;

