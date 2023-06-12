import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/Dashboard/AddClass";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
            
        },
        {
          path: 'classes',
          element: <Classes />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'registration',
          element: <Registration />

        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute> ,
      children: [
        {
          path: 'selectedclass',
          element: <MySelectedClass />
        },
        {
          path: 'manageclasses',
          element: <ManageClasses />
        },
        {
          path: 'manageusers',
          element: <ManageUsers />
        },
        {
          path: 'addclass',
          element: <AddClass />
        },
        {
          path: 'myclasses',
          element: <MyClasses />
        }
      ]
    }
  ]);

export default router;