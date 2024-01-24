import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.svg'
import proPic from '../assets/user.png'
import { useState } from 'react';
import { AlignRight } from 'lucide-react';

const NavBar = () => {
    const user = false;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="p-4 navbar bg-gray-50 drop-shadow-lg dark:bg-gray-900 text-neutral-900 dark:text-neutral-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-10 h-10 dark:bg-neutral-300 mr-2" src={logo} alt="Logo" />
                    
                    <Link to="/" className="text-blue-400 text-3xl font-black uppercase">
                        H<span className='text-lg'>ouse</span> H<span className='text-lg'>unter</span>
                    </Link>
                </div>               

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
                        <ul className="flex items-center space-x-4">
                            <li>
                                <Link to="/" className="text-neutral-900 dark:text-neutral-300 hover:text-gray-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-neutral-900 dark:text-neutral-300 hover:text-gray-300">
                                   About
                                </Link>
                            </li>

                            <li>
                                <Link to="/houses" className="text-neutral-900 dark:text-neutral-300 hover:text-gray-300">
                                    All Houses
                                </Link>
                            </li>


                            {user && (
                                <>
                                    <li>
                                        <Link to="#" className="text-neutral-900 dark:text-neutral-300 hover:text-gray-300 lg:hidden ">
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}

                            {!user && (
                                <li>
                                    <Link to="/login" className="text-neutral-900 dark:text-neutral-300 hover:text-gray-300">
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>                      

                        {user && (
                            <div className="relative group">
                                <img
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="w-10 h-10 object-cover rounded-full cursor-pointer b<User/>order-2 border-white"
                                    src={proPic}
                                    alt="profile picture"
                                />
                                {isMenuOpen && (
                                    <div className="absolute right-0 mt-2 p-2 bg-white text-black rounded shadow-md">
                                        <p className="text-sm font-semibold">{user?.displayName}</p>
                                        <Link to="/dashboard" className="block py-2">
                                            Dashboard
                                        </Link>
                                        <button className="block py-2">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>

                {/* for small screens */}

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="dark:text-neutral-300 text-neutral-900 ">
                        <AlignRight />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-16 right-0 mt-2 p-2 bg-white text-black rounded shadow-md">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="block py-2">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/houses" className="block py-2">
                                        All Houses
                                    </Link>
                                </li>

                                {user && (
                                    <>                                       
                                        <li>
                                            <Link to="/dashboard" className="block py-2">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="block py-2">
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                )}

                                {!user && (
                                    <li>
                                        <Link to="/login" className="block py-2">
                                            Login
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;