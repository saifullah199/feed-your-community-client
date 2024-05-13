import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/singlefood/${user?.email}`,{credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[user])
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Food Image</th>
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
            <td>
                <h2 className="font-bold text-xl">
                        {food.donorName}
                    </h2>
            </td>
            <td>
              {food.location}
            </td>
            <td>
              
             
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