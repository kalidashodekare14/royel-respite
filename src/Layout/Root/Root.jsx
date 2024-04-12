import { Outlet } from 'react-router-dom'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';
const Root = () => {
    return (
        <div className=''>
            <div className='lg:mx-20'>
                <Navbar></Navbar>
            </div>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;