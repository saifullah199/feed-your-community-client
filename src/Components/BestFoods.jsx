import img4 from '../assets/images/checken.webp'
import {motion} from "framer-motion"



const BestFoods = () => {
    const fadeInUpAnimation = {
        hide:{opacity:0,
            y:100,
        },
        show:{
            opacity:1,
            y:0,
            transition: {
                staggerChildren:0.3,
                duration:1.5,
            }
        },
    }
    return (
        <div className='container mx-auto '>
           
            <div className='grid lg:grid-cols-2'>
            <div>
                <img className='w-[700px]' src={img4} alt="" />
            </div>
            <motion.div 
            initial="hide" animate='show' variants={fadeInUpAnimation}
            >
                <div className='space-y-8'>
                <motion.h3 
                 variants={fadeInUpAnimation}
                className='text-3xl font-bold '>Get Best Healthy <br /> Foods & Give <br /> Delicious </motion.h3>
                    <h3></h3>
                </div>
                <div className='flex gap-4'>
                    <motion.p variants={fadeInUpAnimation} 
                    className='text-xl font-semibold'>24 Hours Open</motion.p>
                    <img className='w-[200px]  rounded-full' src='https://i.ibb.co/0hPk8ff/990.jpg'  alt="" />
                    
                </div>
                <div className='flex gap-4 mt-6'>
                <motion.p variants={fadeInUpAnimation}
                 className='text-xl font-semibold'> Best Foods Ever</motion.p>
                    <img className='w-[200px]  rounded-full' src="https://i.ibb.co/WPM8DtT/10731.jpg" alt="" />
                    
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default BestFoods;