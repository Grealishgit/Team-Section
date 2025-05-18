import React from 'react';
import product2 from '../assets/images/product (2).png';
import product3 from '../assets/images/product (3).png';
import product4 from '../assets/images/product (4).png';

const Home = () => {
    return (
        <div className='justify-center bg-center bg-cover w-full items-center bg-white/10 backdrop-blur-md border-white/20 flex flex-col min-h-screen'>
            {/* Hero Section */}
            <div className='flex flex-col items-center mt-20 justify-center  mx-4 border border-white/20 backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg max-w-2xl text-center'>
                <h2 className='text-white font-semibold text-5xl'>
                    Welcome to <span className='text-green-500'>Neuro</span> Investment
                </h2>
                <p className='text-white mt-4 text-lg'>
                    Empower your financial future with smart, data-driven investment insights powered by AI.
                </p>
                <button className='px-8 py-2 cursor-pointer rounded-lg text-white bg-green-600 mt-5 hover:bg-green-700 transition'>
                    Get Started
                </button>
            </div>

            {/* Features Section */}
            <div className='mt-10 px-6 max-w-5xl w-full'>
                <h3 className='text-3xl text-white font-semibold text-center mb-6'>Why Choose Neuro Investment?</h3>
                <div className='grid md:grid-cols-3 gap-6 text-white'>
                    <div className='bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md'>
                        <h4 className='text-xl font-bold mb-2 text-green-400'>AI Insights</h4>
                        <p>Leverage artificial intelligence to analyze market trends and predict performance.</p>
                    </div>
                    <div className='bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md'>
                        <h4 className='text-xl font-bold mb-2 text-green-400'>Real-Time Data</h4>
                        <p>Access live financial data and receive instant updates to stay ahead of the market.</p>
                    </div>
                    <div className='bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md'>
                        <h4 className='text-xl font-bold mb-2 text-green-400'>Secure & Private</h4>
                        <p>Your data is encrypted and protected to ensure full privacy and trust.</p>
                    </div>
                </div>
            </div>

            {/* Popular Products Section */}
            <div className='mt-16 w-full max-w-6xl mb-10 px-6'>
                <h3 className='text-3xl text-white font-semibold text-center mb-8'>Popular Products</h3>
                <div className='grid md:grid-cols-3 gap-6'>
                    {[product2, product3, product4].map((product, index) => (
                        <div key={index} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg text-white text-center'>
                            <img src={product} alt={`Product ${index + 1}`} className='w-full h-60 object-contain rounded-lg mb-4' />
                            <h4 className='text-xl font-semibold mb-2'>Product {index + 1}</h4>
                            <p className='text-sm'>Explore high-quality, AI-curated investment products tailored to your financial goals.</p>
                            <button className='mt-4 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition'>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
