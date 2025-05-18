import React from 'react';
import product1 from '../assets/images/product (1).png';
import product2 from '../assets/images/product (2).png';
import product3 from '../assets/images/product (3).png';
import product4 from '../assets/images/product (4).png';
import product5 from '../assets/images/product (5).png';
import product6 from '../assets/images/product (6).png';

const Products = () => {
    const categories = [
        {
            electronics: [
                { name: 'Laptop' },
                { name: 'Mobile' },
                { name: 'Tablet' },
            ],
        },
        {
            fashion: [
                { name: 'Shirt' },
                { name: 'Pants' },
                { name: 'Shoes' },
            ],
        },
        {
            home_appliances: [
                { name: 'Refrigerator' },
                { name: 'Washing Machine' },
                { name: 'Microwave' },
            ],
        },
        {
            books: [
                { name: 'Fiction' },
                { name: 'Non-Fiction' },
                { name: 'Science' },
            ],
        },
        {
            toys: [
                { name: 'Action Figure' },
                { name: 'Puzzle' },
                { name: 'Board Game' },
            ],
        },
    ];

    return (
        <div className="flex flex-col fixed items-center min-h-screen w-full bg-white/10 backdrop-blur-md border-white/20 ">
            <p className="text-white text-lg md:pl-20 mt-20 px-4 text-center max-w-xl">
                Browse through our collection of a variety of products
            </p>

            <div className="bg-white/10 backdrop-blur-md overflow-y-auto md:block hidden absolute left-0 top-18 scrollbar-hide rounded-xl max-h-[34rem] border border-white/20 shadow-xl w-60  p-6 space-y-4">
                <h2 className="text-2xl text-white font-bold uppercase text-center">Categories</h2>

                {categories.map((category, index) => {
                    const categoryName = Object.keys(category)[0];
                    return (
                        <div key={index}>
                            <h3 className="text-white  text-lg font-semibold capitalize mb-2">
                                {categoryName.replace('_', ' ')}
                            </h3>
                            <ul className="space-y-2">
                                {category[categoryName].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-2 text-white">
                                        <input type="checkbox" className="accent-green-500 cursor-pointer w-4 h-4" />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className="w-full">
                <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide mt-10 mx-2">
                    {categories.map((category, index) => {
                        const categoryName = Object.keys(category)[0];
                        return (
                            <div key={index}
                                className="px-4 py-2 md:hidden block text-center bg-white/10 backdrop-blur-sm 
                     rounded-lg border border-white/20 text-white font-semibold capitalize 
                     whitespace-nowrap cursor-pointer hover:bg-green-700 transition-all duration-300"
                            >
                                {categoryName.replace('_', ' ')}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="relative md:bottom-10 w-full mt-5">
                <div className='md:absolute left-60 right-0  h-screen md:w-[80%] overflow-y-auto scrollbar-hide '>
                    <h2 className="text-2xl text-white font-bold uppercase md:hidden block text-center">Products</h2>

                    <div className='grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 p-4'>
                        {[product1, product2, product3, product4, product5, product6].map((product, index) => (
                            <img
                                key={index}
                                src={product}
                                alt={`product-${index}`}
                                className='rounded-lg border border-white/20 bg-white/10 backdrop-blur-md w-full md:h-60 h-40'
                            />
                        ))}
                </div>
            </div>

            </div>
        </div>


    );
};

export default Products;
