import { Link } from "react-router-dom";


const FoodCard = ({food}) => {

    const {foodName, quantity, location, date,status, notes,
            email,donorName,donorPhoto,foodImage,_id
        }= food
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={foodImage} className="w-[200px] h-[200px] rounded-full"  alt="Movie"/></figure>
  <div className="flex justify-between w-full">
    <div>
        <h2 className="card-title"> {foodName} </h2>
        <p>Food Quantity: {quantity} </p>
        <p>Expired Date: {date} </p>
        <p>Pickup location: {location} </p>
        <p>Additional Notes: {notes} </p>
        <p>Donator Name:{donorName} </p>
        <img src={donorPhoto} alt="" />
    
    </div>
    
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-5">
            <Link to={`/viewdetails/${_id}`}>
               <button  className="btn"> View Details </button>
             </Link>
        
    </div>
    </div>
  </div>
            </div>
        </div>
    );
};

export default FoodCard;