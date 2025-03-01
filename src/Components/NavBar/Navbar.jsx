import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
     return (
          <div>
               <div className="navbar bg-base-100">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <NavLink to='/' className={({isActive}) => isActive ? ' hover:bg-primary font-bold' : 'font-bold'}>
                                   Home
                              </NavLink>
                              <NavLink to='/booklist' className={({isActive}) => isActive ? ' hover:bg-primary font-bold' : 'font-bold'}>
                                   Listed Books
                              </NavLink>
                              <NavLink to='/readpage' className={({isActive}) => isActive ? ' hover:bg-primary font-bold' : 'font-bold'}>
                                   Pages to Read
                              </NavLink>

                              </ul>
                         </div>
                         <Link to="/" className="btn btn-ghost text-xl">Book Vibe</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal item-center gap-3 px-1">
                              <NavLink to='/' className={({isActive}) => isActive ? ' text-primary font-bold' : 'font-bold'}>
                                   Home
                              </NavLink>
                              <NavLink to='/booklist' className={({isActive}) => isActive ? ' text-primary font-bold' : 'font-bold'}>
                                   Listed Books
                              </NavLink>
                              <NavLink to='/readpage' className={({isActive}) => isActive ? ' text-primary font-bold' : 'font-bold'}>
                                   Pages to Read
                              </NavLink>

                         </ul>
                    </div>
                    <div className="navbar-end gap-2">
                         <a className="btn bg-[#23BE0A]">Sign in</a>
                         <a className="btn bg-[#59C6D2]">Sign up</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;