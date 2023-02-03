import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import PageStructure from "./component/common/pageStructure";
import {ConfigProvider} from "antd";
import ANT_THEME_CONFIG from "./config/theme";

import {LanguageProvider} from "./context/LanguageContext";
import languages from "./lang";

const App = () => {
  return (
    <LanguageProvider languages={languages}>
      <ConfigProvider theme={ANT_THEME_CONFIG}>
        <PageStructure>
          <RouterProvider router={router}/>
        </PageStructure>
      </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
