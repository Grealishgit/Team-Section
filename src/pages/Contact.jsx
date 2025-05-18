import React from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
    return (
        <div className='flex fixed items-center justify-center w-full min-h-screen bg-white/10 backdrop-blur-md border-white/20 border'>
            <div className='w-1/2 md:flex hidden flex-col items-center min-h-screen justify-center'>
                <img src={contact} alt="" className='h-auto' />
                <div className='absolute bottom-15 '>
                    <h2 className='text-green-600   font-bold text-center text-5xl'>Contact <span className='text-green-600 underline text-5xl font-bold'>Us</span>
                    </h2>
                    <p className='text-white text-lg text-center mt-2 mx-3'>Neuro is a platform that connects you with the
                        best AI tools and resources to help you learn and grow in the field of artificial intelligence.</p>
                </div>
            </div>
            <div className='flex md:w-1/2 w-full flex-col items-center min-h-screen justify-center bg-black/10 backdrop-blur-md border border-white/20 rounded-lg  p-6  space-y-4'>

                <form className='flex flex-col md:p-8 p-6 border rounded-lg bg-white/10 backdrop-blur-md border-white/20 md:w-130 w-full space-y-4'>
                    <h1 className='text-white text-3xl text-center font-bold'>Contact Us</h1>
                    <div className='flex flex-col gap-1'>
                        <label className='text-white font-semibold' htmlFor="">Name</label>
                        <input type="text" placeholder='Your Name' className='bg-white/10 border border-white/20 rounded-lg p-2' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-white font-semibold' htmlFor="">Email Address</label>
                        <input type="email" placeholder='Your Email' className='bg-white/10 border border-white/20 rounded-lg p-2' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-white font-semibold' htmlFor="">Your Message</label>
                        <textarea placeholder='Your Message' className='bg-white/10 border border-white/20 rounded-lg p-2 h-32' />
                    </div>
                    <button className='bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700'>Send Message</button>
                </form>

            </div>
        </div>
    )
}

export default Contact