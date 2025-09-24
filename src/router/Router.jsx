import {
    createBrowserRouter
  } from "react-router";
import Root from "../layout/Root";
import Error from "../component/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";



  const router = createBrowserRouter([
    
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>

    },
    {
        path: "/login",
        Component: Login,
        errorElement: <Error></Error>
    },
    {
        path: "/register",
        Component: Register,
        errorElement: <Error></Error>
    }

    
   
  ]);

  export default router