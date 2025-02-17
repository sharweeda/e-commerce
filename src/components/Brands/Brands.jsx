import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ThreeDots } from 'react-loader-spinner'; 

export default function Brands() {
    async function getAllBrands() {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
        return response.data;
    }

    const { data, isLoading, error } = useQuery('AllBrands', getAllBrands);

    const [selectedBrand, setSelectedBrand] = useState(null);

    const closeModal = () => setSelectedBrand(null);

    const allBrandsData = data?.data;

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
            ) : error ? ( 
                <p className="text-center text-red-600">Something went wrong!</p>
            ) : (
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl text-green-600 text-center mb-6 font-bold">All Brands</h1>

                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allBrandsData?.map((brand) => (
                            <div
                                key={brand._id}
                                className="border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-green-600 transition-shadow"
                                onClick={() => setSelectedBrand(brand)}
                            >
                                <img className="w-full h-40 object-contain" src={brand.image} alt={brand.name} />
                                <h2 className="text-center text-lg text-green-600 mt-2">{brand.name}</h2>
                            </div>
                        ))}
                    </div>

                    {selectedBrand && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg p-6 w-96 relative">
                                <button
                                    className="absolute top-2 right-2 text-red-500 text-xl font-bold"
                                    onClick={closeModal}
                                >
                                    &times;
                                </button>

                                <div className="flex justify-between items-center border px-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-green-600 mt-4">{selectedBrand.name}</h2>
                                        <h3>dell</h3>
                                    </div>
                                    <img
                                        className="h-[150px] object-contain rounded"
                                        src={selectedBrand.image}
                                        alt={selectedBrand.name}
                                    />
                                </div>

                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}