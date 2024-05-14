import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedFoods from "../Components/FeaturedFoods";
import OurTeam from "../Components/OurTeam";
import BestFoods from "../Components/BestFoods";
import Parrot from "../lottie.json"

import Lottie from "lottie-react"

const Home = () => {
    return (
        <div>
            <Banner  />

            <div className="w-11/12 mx-auto">
                <FeaturedFoods />
            </div>
            <div className="text-center my-5">
                <Link to={'/available-food'}> 
                    <button className="btn btn-accent"> Show All </button>
                </Link>
            </div>
            <div className="my-5 bg-stone-200 w-11/12 mx-auto rounded-2xl  p-5">
                <BestFoods/>
            </div>
            <Lottie className="w-[600px] " animationData={Parrot}/>
            <div className="my-5 bg-base-200 w-11/12 mx-auto rounded-2xl p-5">
                <OurTeam className="my-5"/>
            </div>
           
        </div>
    );
};

export default Home;