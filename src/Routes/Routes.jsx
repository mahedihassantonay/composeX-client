import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/Dashboard/AddClass";
import ClassPayment from "../pages/Dashboard/ClassPayment";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
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
          path: 'instructors',
          element: <Instructors />
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
          path: 'enrolledclass',
          element: <MyEnrolledClasses />
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory />
        },
        {
          path: 'classpayment',
          element: <ClassPayment />
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
        },
        
      ]
    }
  ]);

export default router;