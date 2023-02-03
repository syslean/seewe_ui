import React from 'react';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import Card from "../component/card";
import SubCard from "./subCard";
import {CardInnerLine} from "../profile/index.style";
import {DateRangeField, SelectorField, TextField} from "../component/field";


const Educations: React.FC = () => {

  return (
    <Card title={RESUME_COMPONENT_NAME.EDUCATIONS}>
      <SubCard>
        <CardInnerLine>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </CardInnerLine>
        <CardInnerLine>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </CardInnerLine>
      </SubCard>
      <SubCard>
        <CardInnerLine>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </CardInnerLine>
        <CardInnerLine>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </CardInnerLine>
      </SubCard>
    </Card>
  )
}

export default Educations;

