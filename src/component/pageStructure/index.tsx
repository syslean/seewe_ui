import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
  children: React.ReactNode;
}

const PageStructure: React.FC<IProps> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageStructure;
