import React, {useContext} from 'react';
import {UserOutlined} from "@ant-design/icons";
import {Form, Input} from "antd";
import {ResumeContext} from "../../../page/Resume/ResumeContext";

const Basics: React.FC = () => {
  const {basicInfo} = useContext(ResumeContext);

  return (
    <>
      <div>
        <UserOutlined style={{fontSize: "1.5em"}}/>
        <span>Basics</span>
      </div>
      <div>
        <Form
          name="basics"
          labelCol={{span: 6}}
          wrapperCol={{span: 18}}
        >
          <Form.Item
            label="FullName"
            name="FullName"
          >
            <Input defaultValue={basicInfo.fullName}/>
          </Form.Item>
          <Form.Item
            label="Summary"
            name="Summary"
          >
            <Input.TextArea defaultValue={basicInfo.summary}/>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Basics;

