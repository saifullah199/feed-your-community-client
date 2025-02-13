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
import UpdateFood from "../Pages/UpdateFood";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import EventCalendar from "../Components/EventCalendar";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path: '/available-food',
            element: <AvailableFoods/>,
            loader: () => fetch('https://y-theta-weld.vercel.app/foods')
        },
        {
            path:'/addfood',
            element:<PrivateRoute> <AddFood/> </PrivateRoute>
        },
        {
            path:'/managefood',
            element:<PrivateRoute> <ManageMyFoods/> </PrivateRoute>
        },
        {
            path: '/foodrequest',
            element:<PrivateRoute> <MyFoodRequest/> </PrivateRoute>,
            
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
            element:  <PrivateRoute> <ViewDetails/> </PrivateRoute> ,
            loader: ({params}) => fetch(`https://y-theta-weld.vercel.app/foods/${params.id}`)
            
        },
        {
            path:'/updatefood/:id',
            element: <PrivateRoute> <UpdateFood/> </PrivateRoute>,
            loader: ({params}) => fetch(`https://y-theta-weld.vercel.app/foods/${params.id}`)
        },
        {
            path: '/eventcalendar',
            element: <EventCalendar/>
        }
      ]
    },
  ]);
  export default router