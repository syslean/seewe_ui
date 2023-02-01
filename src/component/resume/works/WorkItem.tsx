import React, {Dispatch} from 'react';
import {getYearAndMonth} from "../../../utils";
import {Button, List, Popconfirm} from "antd";


const WorkItem: React.FC<Props> = ({workExperience, handleClick}: Props) => {

  const handleEditClick = () => {
    handleClick(workExperience.id);
  }

  const handleDeleteClick = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e?.target);
  }


  const basicInfo = `${workExperience.name} - ${workExperience.position}`
  const limitDate = `${getYearAndMonth(workExperience.startDate)} - ${getYearAndMonth(workExperience.endDate)}`;
  return (
    <List.Item actions={[
      <Button type="link" onClick={handleEditClick}>Edit</Button>,
      <Popconfirm
        title="Delete the work experience"
        description="Are you sure to delete this work experience?"
        onConfirm={handleDeleteClick}
      >
        <Button type="link" danger>Delete</Button>
      </Popconfirm>,
    ]}>
      <List.Item.Meta
        title={basicInfo}
        description={limitDate}
      />
    </List.Item>
  )
};

interface Props {
  workExperience: WorkExperienceModal
  handleClick: Dispatch<string>
}

export default WorkItem;
