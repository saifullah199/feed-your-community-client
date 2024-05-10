import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path: '/available-food',
            element: <AvailableFoods/>
        },
        {
            path:'/addfood',
            element:<AddFood/>
        },
        {
            path:'/managefood',
            element:<ManageMyFoods/>
        },
        {
            path: '/foodrequest',
            element:<MyFoodRequest/>
        },
        {
            path: '/login',
            element:<Login/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        }
      ]
    },
  ]);
  export default router