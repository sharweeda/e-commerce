import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { ThreeDots } from 'react-loader-spinner'; // استيراد الـ Loader

export default function Categories() {
    async function getCategories() {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
        return response.data;
    }

    const { data, isLoading, error } = useQuery('allCategories', getCategories);

    const allCategoriesData = data?.data;

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
            ) : error ? ( // عرض رسالة خطأ لو في error
                <p className="text-center text-red-600">Something went wrong!</p>
            ) : (
                <div className="container p-6">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allCategoriesData?.map((cate) => (
                            <div key={cate._id} className="border rounded-lg shadow-md hover:shadow-green-600 transition-shadow">
                                <img src={cate.image} alt={cate.name} className="w-full h-[300px] rounded-md" />
                                <h2 className="p-4 text-xl font-semibold text-center text-green-600">{cate.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}