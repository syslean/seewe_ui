import React from "react";
import Header from "./header";
import Footer from "./footer";
import {Container} from "./index.style";

interface IProps {
  children: React.ReactNode;
}

const PageStructure: React.FC<IProps> = ({children}) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default PageStructure;
