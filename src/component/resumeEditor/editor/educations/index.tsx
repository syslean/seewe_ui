import React from 'react';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import Card from "../component/card";
import SubCard from "../component/subCard";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import {TwoFieldsLayout} from "../component/field/index.style";


const Educations: React.FC = () => {

  return (
    <Card title={RESUME_COMPONENT_NAME.EDUCATIONS}>
      <SubCard>
        <TwoFieldsLayout>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </TwoFieldsLayout>
      </SubCard>
      <SubCard>
        <TwoFieldsLayout>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </TwoFieldsLayout>
        <TwoFieldsLayout>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value=""/>
        </TwoFieldsLayout>
      </SubCard>
    </Card>
  )
}

export default Educations;

