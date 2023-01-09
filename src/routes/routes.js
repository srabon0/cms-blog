import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main/Main";
import Dashboard from "../components/Layout/Dashboard/Dashboard";
import Bloglist from "../components/Layout/Dashboard/Bloglist";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AddBlog from "../components/Layout/Dashboard/AddBlog";
import TestBlog from "../components/Layout/Dashboard/TestBlog";

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
          path: "/details/:id",
          element: <BlogDetails />,
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
        {
          path: "/dashboard/addblog",
          element: <AddBlog />,
        },
        {
          path: "/dashboard/testblog",
          element: <TestBlog />,
        },
        // {
        //   path: "add-product",
        //   element: <AddProduct />,
        // },
      ],
    },
  ]);
  
  export default routes;