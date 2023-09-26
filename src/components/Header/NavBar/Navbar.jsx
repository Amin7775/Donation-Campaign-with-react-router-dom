import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="mt-2">
            <nav className="flex justify-between items-center py-7 shadow-lg px-5">
                <div>
                    <img src="https://i.ibb.co/10Gz4r7/Logo.png" alt="" />
                </div>
                <ul className="flex gap-5 text-xl  px-2">                    
                    <NavLink to='./'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>
                    Home
                    </NavLink>
                    <NavLink to='/donation'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>
                    Donation
                    </NavLink>
                    <NavLink to='/statistics'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>
                    Statistics
                    </NavLink>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;