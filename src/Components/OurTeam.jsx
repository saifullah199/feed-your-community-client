import img1 from '../assets/images/1-1.jpg'
import img2 from '../assets/images/2-1.jpg'
import img3 from '../assets/images/3-1.jpg'

const OurTeam = () => {
    return (
        <div className='container mx-auto '>
            <h3 className='text-3xl font-bold text-center'> EXECUTIVE</h3>
            <h2 className='text-xl font-semibold text-center'>Meet Our Team</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div>
                    <img className='rounded-2xl' src={img1} alt="" />
                    <h3>Md Khalid Saifullah </h3>
                    <p> Head Organizer </p>
                </div>
                <div>
                    <img className='rounded-2xl' src={img2} alt="" />
                    <h3>Sathi Islam</h3>
                    <p> Field Manager</p>
                </div>
                <div>
                    <img className='rounded-2xl' src={img3} alt="" />
                    <h3> Miraj Islam</h3>
                    <p> Head of Operations</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;