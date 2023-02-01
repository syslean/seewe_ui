import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Resume from "../page/ResumeEditor";
import NotFound from "../page/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume/>,
  },
  {
    path: "/*",
    element: <NotFound/>,
  },
]);

export default router;
