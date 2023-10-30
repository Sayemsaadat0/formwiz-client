import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footar from '../Components/Footar/Footar';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto mainLayout'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
        </div>
    );
};

export default MainLayout;