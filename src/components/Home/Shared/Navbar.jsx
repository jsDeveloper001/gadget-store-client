import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/products'}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact us</NavLink>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>Contact us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link to={'login'}>
                        <button className="btn btn-primary">Sign in</button>
                    </Link>
                    <Link to={'register'}>
                        <button className="btn btn-accent">Sign up</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;