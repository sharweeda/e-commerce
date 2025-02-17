import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import Slider from 'react-slick';

export default function CategorySlider() {
  const [category , setCategory] = useState(null);
  const [isLoading , setIsLoading] =useState(true);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
  };
  async function getCategorySlider(){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data);
    setCategory(data.data);
    
  }
  useEffect(()=>{
    getCategorySlider();
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  },[]);
  
  
  return (
    <>
    {isLoading ? <div className="flex justify-center items-center h-screen">
                            <ThreeDots
                                height={80}
                                width={80}
                                radius={9}
                                color="#4fa94d"
                                ariaLabel="loading"
                            />
                        </div> : <div className="py-5">
      <p className='py-4 text-gray-500'>Shop Popular Categories</p>
    <Slider {...settings}>
      {category?.map((cate)=><><div>
        <img className='w-full slider px-2' src={cate?.image} alt={cate?.name} />
        <h3>{cate?.name}</h3>
      </div></>)}
    </Slider>
    </div>
    }
    
    </>
  )
}
