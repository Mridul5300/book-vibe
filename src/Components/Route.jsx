import Navbar from './NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Route = () => {
     return (
          <div>
               <div >
               <Navbar></Navbar>
               </div>
               <div>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Route;