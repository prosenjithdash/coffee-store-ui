import { NavLink } from "react-router-dom";


const Navbar = () => {


    const Links = <>


        {/* Navling with active route style */}


        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? ' btn  border border-[#23BE0A] bg-white text-[#23BE0A] font-bold rounded-[8px]' : 'font-bold'
        }>Home</NavLink></li>




        {/* <li><NavLink to="/statistics">Statistics</NavLink></li> */}


        <li><NavLink to="/addCoffee" className={({ isActive }) =>
            isActive ? ' btn  border border-[#23BE0A] bg-white text-[#23BE0A] font-bold rounded-[8px]' : 'font-bold'
        }>Add Coffee</NavLink></li>




        {/* <li><NavLink to="/bookmarks">Bookmarks</NavLink ></li> */}


        <li><NavLink to="/updateCoffee" className={({ isActive }) =>
            isActive ? ' btn  border border-[#23BE0A] bg-white text-[#23BE0A] font-bold rounded-[8px]' : 'font-bold'
        }>Update Coffee</NavLink></li>




        {/* <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? ' btn  border border-[#23BE0A] bg-white text-[#23BE0A] font-bold rounded-[8px]' : 'font-bold'
        }>Contact</NavLink></li> */}

{/* 
        <li><NavLink to="/about" className={({ isActive }) =>
            isActive ? ' btn  border border-[#23BE0A] bg-white text-[#23BE0A] font-bold rounded-[8px]' : 'font-bold'
        }>About</NavLink></li> */}




    </>
    return (
        <div className="navbar bg-base-100 lg:w-[90%] lg:max-w-[1440] lg:mx-auto mt-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[28px]"> Coffee Store BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className=" btn text-white bg-[#23BE0A] rounded-[8px] text-[18px] ">Sign In</a>


                <a className=" btn text-white bg-[#59C6D2] rounded-[8px] text-[18px] ">Sign In</a>
            </div>
        </div>
    );
};


export default Navbar;