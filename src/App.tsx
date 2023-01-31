import React from 'react';
import Header from "./component/header";
import Footer from "./component/footer";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import config from "./config";
import {WrappedDivider} from "./component/common/divider";
import {WrappedContainer} from './component/common/container';

const GlobalDisplay = {
  headerHeight: "3rem",
  containerHeight: "calc(100vh - 9rem)",
  footerHeight: "5rem"
}

function App() {
  return (
    <>
      <WrappedContainer height={GlobalDisplay.headerHeight} style={{ borderBottom: "lightgray solid thin"}}>
        <Header appName={config.appName}/>
      </WrappedContainer>
      <WrappedContainer height={GlobalDisplay.containerHeight} >
        <RouterProvider router={router}/>
      </WrappedContainer>
      <WrappedContainer height={GlobalDisplay.footerHeight}>
        <WrappedDivider marginverticalsize="0"/>
        <Footer/>
      </WrappedContainer>
    </>
  );
}

export default App;
