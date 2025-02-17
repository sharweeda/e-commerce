import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { data, useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishContext';

export default function ProductDetails() {
  const {addToCart} =useContext(CartContext);
  const { addWishlist, wishlistItems, toggleWishlist } = useContext(WishlistContext);  
      const isInWishlist = wishlistItems.includes();
  
      const handleWishlistClick = () => {
          toggleWishlist(id);
          addWishlist(id);
      };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  let {id} = useParams();
  console.log(id);
  const [productDetails , setproductDetails ] =useState(null)

  async function getProductDetails(id){
      const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      console.log(res);
      setproductDetails(res.data.data);
  }
  useEffect(()=>{
    getProductDetails(id);
  },[id])
  
  return (
    <>
    <div className="container mx-auto w-75 p-5 m-8 mb-5 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap gap-4">
        
        
        <div className="w-full md:w-1/4">
          <Slider {...settings}>
            {productDetails?.images.map((src, index) => (
              <div key={index}>
                <img className='w-full object-cover transition-all transform hover:-translate-y-2 hover:scale-105' src={src} alt={productDetails?.title} />
              </div>
            ))}
          </Slider>
        </div>

        
        <div className="w-full md:w-3/4">
          <h1 className='text-2xl text-white font-semibold m-2'>{productDetails?.title}</h1>
          <p className='text-white mb-2'>{productDetails?.description}</p>
          <span className='block text-sm text-white mb-4'>{productDetails?.category.name}</span>

          <div className="flex justify-between items-center mb-4">
            <span className='text-xl text-white font-bold'>{productDetails?.price} EGP</span>

            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className='text-sm text-white font-medium'>{productDetails?.ratingsAverage}</p>
            </div>
          </div>

          <div className="flex justify-between">
          <button onClick={()=>{addToCart(id)}} className='w-96 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300'>
          Add to Cart
          </button>
          <button onClick={handleWishlistClick} className="focus:outline-none">
                        <i
                            className={`fa-solid fa-heart text-3xl heart transition-colors duration-300 ${
                                isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
                            }`}
                        ></i>
                    </button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
