import img4 from '../assets/images/checken.webp'
import img5 from '../assets/images/chi2.webp'

const BestFoods = () => {
    return (
        <div className='container mx-auto '>
           
            <div className='grid lg:grid-cols-2'>
            <div>
                <img className='w-[700px]' src={img4} alt="" />
            </div>
            <div>
                <div className='space-y-8'>
                <h3 className='text-3xl font-bold '>Get Best Healthy <br /> Foods & Give <br /> Delicious </h3>
                    <h3></h3>
                </div>
                <div className='flex gap-4'>
                    <p className='text-xl font-semibold'>24 Hours Open</p>
                    <img className='w-[200px]  rounded-full' src='https://i.ibb.co/0hPk8ff/990.jpg'  alt="" />
                    
                </div>
                <div className='flex gap-4 mt-6'>
                <p className='text-xl font-semibold'> Best Foods Ever</p>
                    <img className='w-[200px]  rounded-full' src="https://i.ibb.co/WPM8DtT/10731.jpg" alt="" />
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default BestFoods;