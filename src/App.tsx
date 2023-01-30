import React from 'react';
import Header from "./component/header";
import Footer from "./component/footer";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import config from "./config";
import {WrappedDivider} from "./component/common/divider";
import {WrappedContainer} from './component/common/container';

const GlobalDisplay = {
  headerHeight: "8vh",
  contentHeight: "86vh",
  footerHeight: "6vh"
}

function App() {
  return (
    <>
      <WrappedContainer containerHeight={GlobalDisplay.headerHeight}>
        <Header appName={config.appName}/>
        <WrappedDivider marginVerticalSize="0"/>
      </WrappedContainer>
      <WrappedContainer containerHeight={GlobalDisplay.contentHeight}>
        <RouterProvider router={router}/>
      </WrappedContainer>
      <WrappedContainer containerHeight={GlobalDisplay.footerHeight}>
        <WrappedDivider marginVerticalSize="0"/>
        <Footer/>
      </WrappedContainer>
    </>
  );
}

export default App;
