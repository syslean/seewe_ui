import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import PageStructure from "./component/common/pageStructure";
import {LanguageProvider} from "./context/LanguageContext";
import languages from "./lang";

const App = () => {
  return (
    <LanguageProvider languages={languages}>
      <PageStructure>
        <RouterProvider router={router}/>
      </PageStructure>
    </LanguageProvider>
  );
}

export default App;
