import React from 'react';
import {RESUME_COMPONENT_NAME} from "../../../../page/ResumeEditor";
import {CardInnerLine, SubContainer} from "../profile/index.style";
import {DateRangeField, SelectorField, TextField} from "../component/field";
import Card from "../component/card";


const Educations: React.FC = () => {

  return (
    <Card title={RESUME_COMPONENT_NAME.EDUCATIONS}>
      <SubContainer>
        <div style={{height: "2.5rem", background: "#FAFAFA", borderBottom: "1px solid #E9E9E9"}}/>
        <div style={{padding: "2rem"}}>
          <CardInnerLine>
            <TextField title="School Name" value="Happy University"/>
            <TextField title="Major" value="Experience design"/>
          </CardInnerLine>
          <CardInnerLine>
            <SelectorField title="Academic Degree" value="Master"/>
            <DateRangeField title="Period" value=""/>
          </CardInnerLine>
        </div>
      </SubContainer>
      <SubContainer>
        <div style={{height: "2.5rem", background: "#FAFAFA", borderBottom: "1px solid #E9E9E9"}}/>
        <div style={{padding: "2rem"}}>
          <CardInnerLine>
            <TextField title="School Name" value="Happy University"/>
            <TextField title="Major" value="Experience design"/>
          </CardInnerLine>
          <CardInnerLine>
            <SelectorField title="Academic Degree" value="Master"/>
            <DateRangeField title="Period" value=""/>
          </CardInnerLine>
        </div>
      </SubContainer>
    </Card>
  )
}

export default Educations;

