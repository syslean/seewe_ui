import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import PageStructure from "./component/common/pageStructure";
import {ConfigProvider} from "antd";
import ANT_THEME_CONFIG from "./config/theme";


const App = () => {
  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <PageStructure>
        <RouterProvider router={router}/>
      </PageStructure>
    </ConfigProvider>

  );
}

export default App;
