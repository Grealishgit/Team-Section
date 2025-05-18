import React, { useState } from 'react'
import secure from '../assets/secure (2).png'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const handleLogin = () => {
        setIsSignUp(!isSignUp)
    }
    const navigate = useNavigate();
    return (
        <div className='flex fixed top-0 w-full  min-h-screen '>
            <div className='md:flex hidden relative w-1/2 items-center  justify-center min-h-screen '>
                <div className='absolute bottom-15 '>
                    <h2 className='text-green-600   font-bold text-center text-5xl'>Welcome to
                        <span className='text-green-600 underline text-5xl font-bold'> Neuro</span>

                    </h2>
                    <p className='text-white text-lg text-center mt-2 mx-3'>Neuro is a platform that connects you with the
                        best AI tools and resources to help you learn and grow in the field of artificial intelligence.</p>
                </div>
                <img src={secure} alt="secure" className='aspect-square h-auto' />
            </div>

            <div className='md:w-1/2 w-full items-center flex  justify-center bg-white/10 backdrop-blur-md  border-white/20 border min-h-screen '>


                {isSignUp ? (
                    <form
                        className="flex flex-col mx-2 bg-white/10 backdrop-blur-sm  p-6 w-100 space-y-4 rounded-lg border border-white/20 shadow-lg"
                        style={{ animation: 'glow 4s infinite ease-in-out' }}>
                        <h1 className='text-white text-3xl text-center font-bold'>Login</h1>
                        <p onClick={() => navigate('/')} className='text-green-600 underline font-semibold cursor-pointer'>Return Home</p>

                        <div>
                            <label className='text-white text-lg'>Email</label>
                            <input type="email" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Enter your email' />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label className='text-white text-lg'>Password</label>
                                <label className='text-white text-lg cursor-pointer underline'>Forgot Password</label>
                            </div>

                            <input type="password" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Enter your password' />
                        </div>
                        <button className='bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700'>Login</button>
                        <p className='text-white text-center'>Don't have an account? <span onClick={handleLogin} className='text-green-600 font-semibold cursor-pointer'>Sign Up</span></p>
                    </form>
                ) : (
                    <form
                        className="flex flex-col mx-2 bg-white/10 backdrop-blur-sm  p-6 w-100 space-y-4 rounded-lg border border-white/20 shadow-lg"
                        style={{ animation: 'glow 4s infinite ease-in-out' }}>
                            <h1 className='text-white text-3xl text-center font-bold'>Sign Up</h1>
                            <p onClick={() => navigate('/')} className='text-green-600 underline font-semibold cursor-pointer'>Return Home</p>
                        <div>
                            <label className='text-white text-lg'>Username</label>
                            <input type="text" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Enter your username' />
                        </div>
                        <div>
                            <label className='text-white text-lg'>Email</label>
                            <input type="email" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Enter your email' />
                        </div>
                        <div>
                            <label className='text-white text-lg'>Password</label>
                            <input type="password" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Enter your password' />
                        </div>
                        <div>
                            <label className='text-white text-lg'>Confirm Password</label>
                            <input type="password" className='w-full bg-white/10 border border-white/20 rounded-lg p-2' placeholder='Confirm your password' />
                        </div>
                        <button className='bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700'>Sign Up</button>
                        <p className='text-white text-center'>Already have an account? <span onClick={handleLogin} className='text-green-600 font-semibold cursor-pointer'>Sign In</span></p>
                    </form>
                )}

            </div>
        </div>
    )
}

export default Login