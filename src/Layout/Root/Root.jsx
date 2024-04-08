import { Outlet } from 'react-router-dom'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
const Root = () => {
    return (
        <div className=''>
            <div className='bg-[#0077b6]'>
                <div className='lg:mx-20'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;