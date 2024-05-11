import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods";


const Home = () => {
    return (
        <div>
            <Banner  />

            <FeaturedFoods/>
            <div className="text-center my-5">
                <Link to={'/available-food'}> 
                    <button className="btn btn-accent"> Show All </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;