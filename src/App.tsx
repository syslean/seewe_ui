import React from 'react';
import styled from "styled-components";
import Header from "./component/header";
import Footer from "./component/footer";
import {RouterProvider} from "react-router-dom";
import router from "./routes";

const AppHeader = styled.div`
  height: 6vh;
  background: aqua;
`

const AppContent = styled.div`
  height: 86vh;
  background: white;

`

const AppFooter = styled.div`
  height: 8vh;
  background: brown;
`

function App() {
  return (
    <>
      <AppHeader>
        <Header/>
      </AppHeader>
      <AppContent>
        <RouterProvider router={router}/>
      </AppContent>
      <AppFooter>
        <Footer/>
      </AppFooter>
    </>
  );
}

export default App;
