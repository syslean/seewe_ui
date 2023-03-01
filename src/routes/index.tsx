import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Resume from "../page/ResumeEditor";
import NotFound from "../page/NotFound";
import Preview from "../page/ResumePreview";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume/>,
  },
  {
    path: "/preview",
    element: <Preview/>,
  },
  {
    path: "/*",
    element: <NotFound/>,
  },
]);

export default router;
