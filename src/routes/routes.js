import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main/Main";
import Dashboard from "../components/Layout/Dashboard/Dashboard";
import Bloglist from "../components/Layout/Dashboard/Bloglist";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AddBlog from "../components/Layout/Dashboard/AddBlog";
// import TestBlog from "../components/Layout/Dashboard/TestBlog";
import History from "../components/History/History";
import BlogUpdate from "../components/Layout/Dashboard/BlogUpdate";
import Register from "../components/Auth/Register/Register";
import Login from "../components/Auth/Login/Login";
import RequireAuth from "../components/Auth/RequireAuth";
import Admin from "../components/Auth/Admin";


const routes = createBrowserRouter([
    {
      path: "/",
      element:  <Main />,
      children: [
        {
          path: "/",
          element: <RequireAuth> <Home /> </RequireAuth>,
        },
        {
          path: "/details/:id",
          element: <RequireAuth><BlogDetails /></RequireAuth>,
        },
        {
          path: "/about",
          element:<RequireAuth>  <About /> </RequireAuth>,
        },
        {
          path: "/history",
          element: <RequireAuth> <History /> </RequireAuth>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        
      ],
    },
    {
      path: "/dashboard",
      element:<Admin>  <Dashboard /> </Admin>,
      children: [
        {
          path: "/dashboard",
          element: <Admin> <Bloglist /> </Admin>,
        },
        {
          path: "/dashboard/addblog",
          element:<RequireAuth>  <AddBlog /> </RequireAuth>,
        },
        // {
        //   path: "/dashboard/testblog",
        //   element: <RequireAuth> <TestBlog /> </RequireAuth>,
        // },
        
        {
          path: "/dashboard/update/:id",
          element: <RequireAuth> <BlogUpdate /> </RequireAuth>,
        },
        
        // {
        //   path: "add-product",
        //   element: <AddProduct />,
        // },
      ],
    },
  ]);
  
  export default routes;