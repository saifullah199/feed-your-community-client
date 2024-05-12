import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageMyFoods = () => {

    const {user} = useContext(AuthContext)
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        fetch(`https://y-theta-weld.vercel.app/food/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[user])

    const handleDelete =_id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            
            fetch(`https://y-theta-weld.vercel.app/food/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if( data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Food Image</th>
        <th>Food Name</th>
        <th>Pickup Location</th>
        <th>Additional Notes</th>
        <th>Expired Date</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        foods.map(food => <tr key={food._id}>
            <th>
              <button 
              onClick={() => handleDelete(food._id)}
              className="btn" >
                    X
              </button>
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
                        {food.foodName}
                    </h2>
            </td>
            <td>
              {food.location}
            </td>
            <td>
              
              {food.notes}
            </td>
            <td> {food.date} </td>
            <td>{food.quantity}</td>
            <th>
              <Link to={`/updatefood/${food._id}`}>
                <button className="btn btn-ghost">Update </button>
              </Link>
            </th>
          </tr>)
      }
      
      
      
      
      
      
    </tbody>
    
    
    
  </table>
            </div>
            
            
        </div>
    );
};

export default ManageMyFoods;