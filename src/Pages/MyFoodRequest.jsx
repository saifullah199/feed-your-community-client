import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/singlefood/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    },[user])
    return (
        <div>
            my food request {foods.length}
        </div>
    );
};

export default MyFoodRequest;