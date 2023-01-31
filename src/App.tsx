import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import PageStructure from "./component/pageStructure";


const App = () => {
  return (
    <PageStructure>
      <RouterProvider router={router}/>
    </PageStructure>
  );
}

export default App;
