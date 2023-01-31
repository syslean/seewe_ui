import React from 'react';
import {Title, HeaderWrapper} from "./index.style";
import {ResumeIcon} from "../../common/icons";


const Header: React.FC<Props> = ({appName}: Props) => {
  return (
    <HeaderWrapper>
      <ResumeIcon/>
      <Title>{appName}</Title>

    </HeaderWrapper>
  )
}


interface Props {
  appName: string;
}

export default Header;
