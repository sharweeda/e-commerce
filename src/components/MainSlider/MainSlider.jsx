import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import MainSlider from '../../assets/images/slider-image-3.jpeg';
import Slider1 from '../../assets/images/slider-image-1.jpeg';
import Slider2 from '../../assets/images/slider-image-2.jpeg';
import Playstation from '../../assets/images/playstation.jpeg';
import blog from '../../assets/images/blog-img-2.jpeg';
import { ThreeDots } from 'react-loader-spinner';
export default function MainSliders() {
  const [isLoading , setIsLoading] =useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  },[]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
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
                    </div> : <div className='row '>
        <div className="w-3/4">
        <Slider {...settings}>
          <img src={MainSlider} className='w-full h-[400px]' alt="MainSlider" />
          <img src={Playstation} className='w-full h-[400px]' alt="Slider1" />
          <img src={blog} className='w-full h-[400px]' alt="Slider2" />
          </Slider>
        
        </div>
        <div className="w-1/4">
          <img src={Slider1} className='w-full h-[200px]' alt="Slider1" />
          <img src={Slider2} className='w-full h-[200px]' alt="Slider2" />
        </div>
    </div> }

    
    
    
    
    </>
  )
}
