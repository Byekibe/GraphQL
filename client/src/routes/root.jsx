import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import ProjectDetailPage from "../components/ProjectDetailPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },

     {
        path: "project/:id",
        element: <ProjectDetailPage />
     }
  ])

export {router};