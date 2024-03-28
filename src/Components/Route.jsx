import Navbar from './NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Route = () => {
     return (
          <div>
               <div className='container mx-auto my-4 w-11/12 h-4/6' >
               <Navbar></Navbar>
               </div>
               <div className='container mx-auto w-11/12 h-4/6'>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Route;