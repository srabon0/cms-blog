import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main/Main";
import Dashboard from "../components/Layout/Dashboard/Dashboard";
import Bloglist from "../components/Layout/Dashboard/Bloglist";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard",
          element: <Bloglist />,
        },
        // {
        //   path: "add-product",
        //   element: <AddProduct />,
        // },
      ],
    },
  ]);
  
  export default routes;