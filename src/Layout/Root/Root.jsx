import { Outlet } from 'react-router-dom'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';
const Root = () => {
    return (
        <div className=''>
            <div className='relative z-20 lg:mx-20'>
                <Navbar></Navbar>
            </div>
            <div className='md:pt-32 lg:pt-28'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;