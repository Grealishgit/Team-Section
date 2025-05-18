import React from 'react'

const Home = () => {
    return (
        <div
            className='justify-center bg-center bg-cover w-full items-center bg-white/10 backdrop-blur-md border-white/20 flex flex-col min-h-screen'
        >
            <div className='flex flex-col items-center justify-center md:mt-4 mx-4 border border-white/20 backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg'>
                <h2 className='text-white text-center font-semibold text-5xl'>Welcome to <span className='text-green-500'>Neuro</span> Investiment</h2>
                <button className='px-8 py-2 cursor-pointer rounded-lg text-white bg-green-600 mt-5'>Get Started</button>
            </div>
        </div>
    )
}

export default Home