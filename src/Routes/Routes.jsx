import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Classes from "../pages/Classes/Classes";
import MySelectedClass from "../pages/Dashboard/MySelectedClass";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


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
      element: <Dashboard />,
      children: [
        {
          path: 'selectedclass',
          element: <MySelectedClass />
        }
      ]
    }
  ]);

export default router;