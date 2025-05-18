import React from 'react';
import product from '../assets/images/product (4).png'

const About = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-white/10 backdrop-blur-md border-white/20'>
            <div className='max-w-4xl mx-4 p-8 bg-white/10 mt-20 border border-white/20 backdrop-blur-lg rounded-xl shadow-lg text-white'>
                <h1 className='text-4xl font-bold text-center text-green-500 mb-6'>About Neuro Investment</h1>
                <p className='text-lg mb-4'>
                    <span className='text-green-400 font-semibold'>Neuro Investment</span> is a cutting-edge platform that harnesses the power of artificial intelligence and real-time data to provide intelligent investment strategies.
                </p>
                <p className='text-lg mb-4'>
                    Our mission is to empower individuals and organizations to make informed financial decisions with ease, accuracy, and security. Whether you're new to investing or a seasoned expert, our platform adapts to your needs.
                </p>
                <h2 className='text-2xl font-semibold mt-6 mb-2 text-green-400'>What We Offer</h2>
                <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
                    <ul className='list-disc list-inside space-y-2'>
                        <p className='text-lg mb-4'>
                            We provide a suite of tools and features designed to enhance your investment experience:
                        </p>
                        <li>AI-driven market insights and forecasts</li>
                        <li>Secure and private data handling</li>
                        <li>Real-time updates and alerts</li>
                        <li>Personalized investment suggestions</li>
                        <li>Seamless user experience with a sleek interface</li>
                    </ul>
                    <img src={product} alt="product" className='hidden md:block h-60 w-60' />
                </div>


                <h2 className='text-2xl font-semibold mt-6 mb-2 text-green-400'>Our Vision</h2>
                <p className='text-lg'>
                    To revolutionize the way people interact with investments by making financial intelligence accessible, intuitive, and transparent for all.
                </p>
            </div>
        </div>
    );
};

export default About;
