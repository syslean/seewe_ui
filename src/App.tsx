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
  footerHeight: "3rem"
}

function App() {
  return (
    <>
      <WrappedContainer containerHeight={GlobalDisplay.headerHeight} style={{ borderBottom: "lightgray solid thin"}}>
        <Header appName={config.appName}/>
      </WrappedContainer>
      <WrappedContainer>
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
