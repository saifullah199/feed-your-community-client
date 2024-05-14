import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios"
import { useMutation } from "@tanstack/react-query";
const ViewDetails = () => {

  const {user} = useContext(AuthContext)
    const food = useLoaderData()
    const {foodName, quantity, location, date,status, notes,
      email,donorName,donorPhoto,foodImage,_id
    }= food

    const handleReqFood = e =>{
        e.preventDefault()
        const form = e.target
        const foodName = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const status = form.status.value;
        const notes = form.notes.value;
        const email = user.email;
        const donorEmail = form.donorEmail.value;
         const donorName = form.donorName.value;
        
        const foodImage = form.photo.value;

        const newReqs = {foodName,quantity, location,date,status,notes,
            email,donorEmail,donorName,foodImage}

            console.log(newReqs)
            // send data to the server
        fetch('https://y-theta-weld.vercel.app/single',{
            method:'POST',
            headers: {
             'content-type': 'application/json'
            },
            body: JSON.stringify(newReqs) 
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if(data.insertedId){
                 Swal.fire({
                     title: 'Success!',
                     text: 'Food Added Successfully',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                 })
             }
         })
    }

 const {mutateAsync} =   useMutation({
        mutationFn: async ({id,status}) => {
            const {data }= await axios.patch(
                `${import.meta.env.VITE_API_URL}/singlefood/${id}`,{status} 
             ) 
             console.log(data)
        },
        
    })

    const handleStatus = async (id,prevStatus, status) => {
        console.log(id,prevStatus,status)
        
        

       await  mutateAsync({id,status})
    }

    return (
        <div className="m-10">
             <div data-aos="zoom-in" data-aos-duration="1000" className="card relative  bg-base-100 shadow-xl">
  <figure className="relative">
    <img className="rounded-2xl" src={foodImage} alt="Album"/>
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
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Request for Food</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Request a food</h3>
    <form onSubmit={handleReqFood} className="space-y-8">
     
     {/* form row */}
         <div className="flex gap-5">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Food Name</span>
             </label>
             <label className="input-group">
                 <input type="text" defaultValue={foodName} name="name" disabled placeholder="Food Name" className="w-full input input-bordered" />
             </label>
         </div>
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Food Quantity</span>
             </label>
             <label className="input-group">
                 <input type="text" name="quantity" defaultValue={quantity} disabled placeholder="Food Quantity" className="w-full input input-bordered" />
             </label>
         </div>
         
         </div>
         {/* form row */}
         <div className="flex gap-5">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Pickup Location</span>
             </label>
             <label className="input-group">
                 <input type="text" name="location" defaultValue={location} disabled placeholder="Pickup Location" className="w-full input input-bordered" />
             </label>
         </div>
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text">Expired Date </span>
             </label>
             <label className="input-group" >
                 <input type="date" name="date" defaultValue={date} disabled placeholder="Expired Date" className="w-full input input-bordered" />
             </label>
         </div>
         </div>
         
         {/* form row */}
         <div className="flex gap-5">
         
          
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text">  Email</span>
             </label>
               <label className="input-group">
                 <input type="email" name="email" defaultValue={user?.email} disabled placeholder="User Email" className="w-full input input-bordered"  />
             </label> 
         </div>

         <div className="form-control w-1/2">
             <label className="label">
                 <span className="label-text">Additional Notes</span>
             </label>
             <label className="input-group" >
                 <input type="text" name="notes" defaultValue={notes} placeholder="Additional Notes" className="w-full input input-bordered" />
             </label>
         </div>
         </div>
         {/* form row */}
          <div className="flex gap-5">
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Donor Email</span>
             </label>
               <label className="input-group">
                 <input type="email" name="donorEmail" defaultValue={email} placeholder="User Email" className="w-full input input-bordered" disabled />
             </label> 
         </div>
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Donor Name</span>
             </label>
               <label className="input-group" >
                 <input type="text" name="donorName" defaultValue={donorName} disabled placeholder="User Name" className="w-full input input-bordered" />
             </label>  
         </div>
         </div> 
         {/* form row */}
         <div className="flex gap-5">
         <div className="form-control w-1/2">
             <label className="label">
                 <span className="label-text"> Food Image</span>
             </label>
             <label className="input-group">
                 <input type="text" name="photo" defaultValue={foodImage} disabled placeholder="Food Image" className="w-full input input-bordered" />
             </label>
         </div>
         <div className="form-control w-1/2">
             <label className="label">
                 <span className="label-text"> Donor Image</span>
             </label>
             <label className="input-group">
                 <input type="text" name="donorPhoto" defaultValue={donorPhoto} disabled placeholder="Donor Image" className="w-full input input-bordered"  />
             </label>
         </div>
         
         </div>
         <div className="form-control md:w-1/2">
             <label className="label">
                 <span className="label-text"> Food Status</span>
             </label>
             <label className="input-group" >
                 <input type="text" name="status" defaultValue={status} disabled placeholder="Food Status" className="w-full input input-bordered" />
             </label>
         </div> 
         <input onClick={ () => handleStatus(_id, status, 'requested')} type="submit" value="Request this Food" className="btn btn-block" />
    </form>
    
  </div>
</dialog>
        
    

    </div>
  </div>
</div> 


        </div>
    );
};

export default ViewDetails;