import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ViewDetails from "../Pages/ViewDetails";


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
            element: <AvailableFoods/>,
            loader: () => fetch('http://localhost:5000/foods')
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
        },
        
        {
            path: '/viewdetails/:id',
            element:  <ViewDetails/> ,
            loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            
          },
      ]
    },
  ]);
  export default router