import { Outlet } from 'react-router-dom'
import Navbar from '../../Pages/Shared/Navbar/Navbar';
const Root = () => {
    return (
        <div className='relative'>
            <div className='bg-[#0077b6]'>
                <div >
                    <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;