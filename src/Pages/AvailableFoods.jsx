import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";


const AvailableFoods = () => {

    const foods = useLoaderData()

    return (
        <div>
            available foods {foods.length}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    foods.filter(f => f.status === "available")
                    .map(food => <FoodCard key={food._id} food={food}/>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;