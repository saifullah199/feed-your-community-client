import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
    const {user} = useContext(AuthContext)

    const handleAddFood = e =>{
        e.preventDefault()
        const form = e.target;
        const foodName = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const status = form.status.value;
        const notes = form.notes.value;
        const email = user.email;
         const donorName = user.displayName;
         const donorPhoto = user.photoUrl;
        const foodImage = form.photo.value;

        const newFood = {foodName, quantity, location, date,status, notes,
            email,donorName,donorPhoto,foodImage
        }

        console.log(newFood);

        // send data to the server
        fetch('http://localhost:5000/foods',{
           method:'POST',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(newFood) 
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

    return (
        <div className="rounded-2xl mt-8">
           
           <div className="bg-[#F4F3F0] p-24  ">
            <h2 className="text-center text-3xl font-bold ">Add Your Food </h2>
            <form onSubmit={handleAddFood}  className="space-y-8">
                {/* form row */}
                    <div className="flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Food Name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Food Quantity" className="w-full input input-bordered" />
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
                            <input type="text" name="location" placeholder="Pickup Location" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Expired Date </span>
                        </label>
                        <label className="input-group" >
                            <input type="date" name="date" placeholder="Expired Date" className="w-full input input-bordered" />
                        </label>
                    </div>
                    </div>
                    
                    {/* form row */}
                    <div className="flex gap-5">
                    
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Food Status</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="status" placeholder="Food Status" className="w-full input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="notes" placeholder="Additional Notes" className="w-full input input-bordered" />
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
                            <input type="email" name="email" defaultValue={user?.email} placeholder="User Email" className="w-full input input-bordered" disabled />
                        </label> 
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Donor Name</span>
                        </label>
                          <label className="input-group" >
                            <input type="text" name="userName" defaultValue={user?.displayName} placeholder="User Name" className="w-full input input-bordered"  disabled/>
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
                            <input type="text" name="photo" placeholder="Food Image" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Donor Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="donorPhoto" defaultValue={user?.photoUrl} placeholder="Donor Image" className="w-full input input-bordered" disabled />
                        </label>
                    </div>
                    
                    </div>
                <input type="submit" value="Add a Food" className="btn btn-block" />
            </form>
        </div>
        </div>
    );
};

export default AddFood;