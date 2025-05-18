import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('bg-white/10');
        } else {
            navbar.classList.remove('bg-white/10');
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='fixed flex w-full top-0 z-80 justify-between items-center border-white/20 backdrop-blur-md bg-white/10 md:p-3 p-3'>
            <div className='text-green-600 text-2xl font-bold animate-bounce' onClick={() => navigate('/')}>
                Neuro
            </div>
            <nav className='md:flex hidden space-x-4'>
                <p onClick={() => navigate('/')} className='text-white relative cursor-pointer text-lg hover:text-green-600 group'>Home
                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                </p>
                <p onClick={() => navigate('/product')} className='text-white text-lg relative cursor-pointer hover:text-green-600 group'>Products
                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                </p>
                <p onClick={() => navigate('/team')} className='text-white text-lg relative cursor-pointer hover:text-green-600 group'>Team
                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                </p>
                <p onClick={() => navigate('/about')} className='text-white text-lg relative cursor-pointer hover:text-green-600 group'>About Us
                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                </p>
                <p onClick={() => navigate('/contact')} className='text-white text-lg relative cursor-pointer hover:text-green-600 group'>Contact
                    <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                </p>
            </nav>
            <div className='flex flex-row items-center gap-2'>

                <button onClick={() => navigate('/login')} className='bg-green-600 flex cursor-pointer flex-row items-center gap-2 text-white px-4 py-2 rounded hover:bg-green-700'> 
                    <p>Sign In</p>
                    <IoMdLogIn className='text-white animate-ping' />
                </button>
                <FiMenu onClick={() => setIsOpen(!isOpen)} className='text-green-600 text-2xl md:hidden' />
            </div>

            <div className={`absolute top-16 right-10 bg-black/50 w-60 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg p-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <nav className='flex flex-col items-center space-y-4'>
                    <p onClick={() => { navigate('/'); setIsOpen(!isOpen) }} className='text-white relative cursor-pointer text-lg font-semibold group'>Home
                        <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                    </p>
                    <p onClick={() => { navigate('/product'); setIsOpen(!isOpen) }} className='text-white text-lg relative cursor-pointer font-semibold group'>Products
                        <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                    </p>
                    <p onClick={() => { navigate('/team'); setIsOpen(!isOpen) }} className='text-white text-lg relative cursor-pointer font-semibold group'>Team
                        <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                    </p>
                    <p onClick={() => { navigate('/about'); setIsOpen(!isOpen) }} className='text-white text-lg relative cursor-pointer font-semibold group'>About
                        <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                    </p>
                    <p onClick={() => { navigate('/contact'); setIsOpen(!isOpen) }} className='text-white text-lg relative cursor-pointer font-semibold group'>Contact
                        <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300" />
                    </p>
                </nav>
                <div className='flex flex-col items-center mt-4'>
                    <button onClick={() => navigate('/login')} className='bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 mt-4'>
                        <p>Sign In</p>
                    </button>
                </div>

                {/* <button onClick={() => setIsOpen(!isOpen)} className='absolute top-2 right-2 text-white'>Close</button> */}
            </div>

        </div >
    )
}

export default Navbar