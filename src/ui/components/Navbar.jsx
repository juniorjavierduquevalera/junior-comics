import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import './style.css'

const Navbar = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login',
        );
        console.log('logout',{
            replace: true,
        });
      }

    return (
        <nav className="navbar nav-container fixed z-10 bg-red-800 p-2 rounded-md shadow-md">
            <div className="navbar-start">
                <div className="dropdown inline md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <AiOutlineMenu className='w-6 h-6'/>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink
                            className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                        className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                        to="/dc"
                        >
                        DC
                        </NavLink>

                        <NavLink
                            className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                            to="/search"
                        >
                            Search
                        </NavLink>

                    </ul>
                </div>
                <div className="md:flex item-center gap-4 hidden ">
                    <NavLink
                        className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={ ({isActive}) => `btn btn-ghost ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <Link
                className="navbar-center normal-case text-4xl font-extrabold"
                to="/"
            >
                Comics
            </Link>

            <div className="navbar-end pr-2">
                <ul className="flex items-center gap-2">
                    <figure>
                        <img
                        className="border-2 border-white w-8 rounded-full"
                        src="https://random.imagecdn.app/100/100" />
                    </figure>
                    <CiLogout
                    className="w-8 h-8"
                    onClick={ onLogout }
                    >
                    </CiLogout>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;