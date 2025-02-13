import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import axios from "axios"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)

    const [startDate, setStartDate] = useState(new Date())
    const requestedDate = startDate;

   const {data: foods =[], isLoading, refetch, error} = useQuery({
      queryFn: () => getData(),
      queryKey: ['foods']
    })

    console.log(foods)
    // const [foods, setFoods] = useState([])

    // useEffect(() =>{
    //     fetch(`https://y-theta-weld.vercel.app/singlefood/${user?.email}`,{credentials: 'include'})
    //     .then(res => res.json())
    //     .then(data => {
    //         setFoods(data)
    //     })
    // },[user])

    // useEffect(() => {
    //   getData()
    // },[user])

    const getData = async () => {
      const {data} = await axios(
        `https://y-theta-weld.vercel.app/singlefood/${user?.email}`, {withCredentials: 'include'}
      )
      return data 
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Food Image</th>
        <th>Food Name</th>
        <th>Additional Notes</th>
        <th>Donar Name</th>
        <th>Pickup Location</th>
        <th>Request date</th>
        <th>Expired Date</th>
        <th>Quantity</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        foods.map(food => <tr key={food._id}>
            <th>
              
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food.foodImage} />
                  </div>
                </div>
                
              </div>
            </td>
            <td className='font-semibold text-xl '>{food.foodName} </td>
            <td> {food.notes}</td>
            <td>
                <h2 className="font-bold text-xl">
                        {food.donorName}
                    </h2>
            </td>
            <td>
              {food.location}
            </td>
            <td>
              {new Date(requestedDate).toLocaleDateString()}
             
            </td>
            <td> {food.date} </td>
            <td>{food.quantity}</td>
            
            
          </tr>)
      }
      
      
      
      
      
      
    </tbody>
    
    
    
  </table>
            </div>
    );
};

export default MyFoodRequest;