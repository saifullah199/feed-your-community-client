import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {
    const {user} = useContext(AuthContext)
    const food = useLoaderData()
    const {foodName, quantity, location, date, notes,
        foodImage,_id} = food;

    const handleUpdateFood = e =>{
        e.preventDefault()
        const form = e.target;
        const foodName = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const foodImage = form.photo.value;
        
         
        

        const updateFood = {foodName, quantity, location, date, notes,
           foodImage
        }

        console.log(updateFood);

        // send data to the server
        fetch(`https://y-theta-weld.vercel.app/food/${_id}`,{
           method:'PUT',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(updateFood) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className="rounded-2xl mt-8">
           food {food.length}
           <div className="bg-[#F4F3F0] p-24  ">
            <h2 className="text-center text-3xl font-bold ">Update Your Food </h2>
            <form onSubmit={handleUpdateFood}  className="space-y-8">
                {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={foodName}  placeholder="Food Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Food Quantity" className="w-full input input-bordered" />
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
                            <input type="text" name="location" defaultValue={location} placeholder="Pickup Location" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Expired Date </span>
                        </label>
                        <label className="input-group" >
                            <input type="date" name="date" defaultValue={date} placeholder="Expired Date" className="w-full input input-bordered" />
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
                            <input type="text" name="photo" defaultValue={foodImage} placeholder="Food Image" className="w-full input input-bordered" />
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
                    
                     
                   
                <input type="submit" value="Update a Food" className="btn btn-block" />
            </form>
        </div>
        </div>
    );
};

export default UpdateFood;