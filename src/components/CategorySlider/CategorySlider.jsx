import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CategorySlider() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  async function getCategorySlider() {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    console.log(data);
    setCategory(data.data);
  }

  useEffect(() => {
    getCategorySlider();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ThreeDots
            height={80}
            width={80}
            radius={9}
            color="#4fa94d"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div className="py-5">
          <p className="py-4 text-gray-500">Shop Popular Categories</p>
          <Slider {...settings}>
            {category?.map((cate) => (
              <div key={cate._id} className="px-2">
                <img
                  className="w-full h-32 object-cover rounded-lg"
                  src={cate?.image}
                  alt={cate?.name}
                />
                <h3 className="text-center mt-2 text-sm font-medium text-gray-700">
                  {cate?.name}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}