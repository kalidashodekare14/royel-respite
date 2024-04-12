import { Outlet } from 'react-router-dom'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
const Root = () => {
    return (
        <div className=''>
            <div className=' bg-[#2a9d8f]'>
                <div className='mx-20'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;