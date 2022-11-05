import { NavLink } from "react-router-dom"
import { useAuth } from "./auth";

const Navbar = () => {
    const auth = useAuth()

    return (
        <nav className="navbar">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'Link active' : 'Link')}
            >Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'Link active' : 'Link')}>About</NavLink>
            <NavLink to='/products' className={({ isActive }) => (isActive ? 'Link active' : 'Link')}>Products</NavLink>
            <NavLink to='/profile' className={({ isActive }) => (isActive ? 'Link active' : 'Link')}>Profile</NavLink>
            {!auth.user && (
                <NavLink to='/login' className={({ isActive }) => (isActive ? 'Link active' : 'Link')}>Login</NavLink>

            )}
        </nav>
    );
};

export default Navbar;