import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner'; 

export default function Cart() {
    const {
        getCartData,
        allCartItems,
        removeProductCart,
        totalPrice,
        updateProductCart,
        isGettingCartData,
        isRemovingFromCart,
        isUpdatingCart,
        clearProductCart
    } = useContext(CartContext);
    

    useEffect(() => {
        getCartData();
    }, []);

    return (
        <>
{isGettingCartData ? ( 
    <div className="flex justify-center items-center h-screen">
    <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#4fa94d"
        ariaLabel="loading"
    />
    </div>
) : allCartItems?.length === 0 ? ( 
<div className="p-6 text-red-600 text-lg text-center font-semibold ">Cart Is Empty</div>
) : (
<>
    <div className="relative m-5 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="container flex justify-between">
            <div>
                <h2 className="px-6 font-normal text-2xl">Cart Shop</h2>
                <h2 className="p-6 text-lg">
                    Total Price : <span className=' text-green-600'>{totalPrice}</span> EGP
                </h2>
            </div>
            <div>
                <Link to={'/order'}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Check Out
                    </button>
                </Link>
            </div>
        </div>
        <table className="w-75 mx-auto mb-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400   ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                    <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {allCartItems?.map((item) => (
                    <tr
                        key={item.product.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td className="p-4">
                            <img
                                src={item.product.imageCover}
                                className="w-16 md:w-32 max-w-full max-h-full"
                                alt={item.product.title}
                            />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {item.product.title}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <button
                                    onClick={() => {
                                        updateProductCart(item.product.id, item.count - 1);
                                    }}
                                    disabled={isUpdatingCart} 
                                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    {isUpdatingCart ? ( 
                                        <ThreeDots
                                            height={20}
                                            width={20}
                                            radius={9}
                                            color="#4fa94d"
                                            ariaLabel="loading"
                                        />
                                    ) : (
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                                <div>
                                    <span>{item.count}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        updateProductCart(item.product.id, item.count + 1);
                                    }}
                                    disabled={isUpdatingCart} 
                                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    {isUpdatingCart ? ( 
                                        <ThreeDots
                                            height={20}
                                            width={20}
                                            radius={9}
                                            color="#4fa94d"
                                            ariaLabel="loading"
                                        />
                                    ) : (
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {item.price} EGP
                        </td>
                        <td className="px-6 py-4">
                            <button
                                onClick={() => {
                                    removeProductCart(item.product.id);
                                }}
                                disabled={isRemovingFromCart} 
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                                {isRemovingFromCart ? ( 
                                    <ThreeDots
                                        height={20}
                                        width={40}
                                        radius={9}
                                        color="#ff0000"
                                        ariaLabel="loading"
                                    />
                                ) : (
                                    'Remove'
                                )}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='mb-4 text-center'>
        <button
    onClick={() => clearProductCart()} 
    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-4 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    Clear Cart
</button>
        </div>
    </div>
    </>
    )}
    </>
    );
    }