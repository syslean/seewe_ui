import React from 'react';
import CardHeader from "../component/cardHeader";
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import CardContainer from "../component/cardContainer";
import {CardInnerLine} from "../profile/index.style";
import {DateRangeField, SelectorField, TextField} from "../component/field";


const Educations: React.FC = () => {

  return (
    <>
      <CardHeader title={RESUME_COMPONENT_NAME.EDUCATIONS}/>
      <CardContainer>
        <CardInnerLine>
          <TextField title="School Name" value="Happy University"/>
          <TextField title="Major" value="Experience design"/>
        </CardInnerLine>
        <CardInnerLine>
          <SelectorField title="Academic Degree" value="Master"/>
          <DateRangeField title="Period" value="jean@seewe.com"/>
        </CardInnerLine>
      </CardContainer>
    </>
  )
}

export default Educations;

