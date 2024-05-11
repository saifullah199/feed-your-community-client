import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[])

    return (
        <div>
           <h3 className="text-2xl font-bold text-center my-4"> Featured Foods</h3>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    foods.map(food => <div key={food._id}>
                        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={food.foodImage} className="w-[200px] h-[150px] rounded-full"  alt="Movie"/></figure>
  <div className="flex justify-between w-full">
    <div>
        <h2 className="card-title"> {food.foodName} </h2>
        <p>Food Quantity: {food.quantity} </p>
        <p>Expired Date: {food.date} </p>
        <p>Pickup location: {food.location} </p>
        <p>Additional Notes: {food.notes} </p>
        <p>Donator Name:{food.donorName} </p>
        <img src={food.donorPhoto} alt="" />
    
    </div>
    
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-5">
            <Link to={`/viewdetails/${food._id}`}>
               <button  className="btn"> View Details </button>
             </Link>
        
    </div>
    </div>
  </div>
            </div>
                    </div>)
                }
           </div>
        </div>
    );
};

export default FeaturedFoods;