import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const food = useLoaderData()
    const {foodName, quantity, location, date,
        donorName,foodImage,_id
    }= food

    return (
        <div className="m-10">
             <div data-aos="zoom-in" data-aos-duration="1000" className="card relative  bg-base-100 shadow-xl">
  <figure className="relative">
    <img className="rounded-2xl" src= {foodImage} alt="Album"/>
    </figure>
  <div className="card-body absolute top-72 right-10 text-black">
    <h2 className="card-title text-3xl font-bold"> {foodName} </h2>
    <div className="text-2xl font-medium">
        <p> Food Quantity: {quantity} </p>
        
        
        <p>Expired Date: {date}</p>
        <p>Pickup Location: {location}</p>
        <p>Donator Name: {donorName}</p>
        
        
    </div>
     
    
    <div className="card-actions justify-end">
        <button className="btn "> Request for Food </button>
    </div>
  </div>
</div> 


        </div>
    );
};

export default ViewDetails;