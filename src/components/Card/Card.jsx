import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../Context/WishContext';

export default function Card(props) {
    const { addToCart } = useContext(CartContext);
    const { addWishlist, wishlistItems, toggleWishlist } = useContext(WishlistContext);

    const { title, name, imageCover, id, price, ratingsAverage } = props.product;

    const isInWishlist = wishlistItems.includes(id);

    const handleWishlistClick = () => {
        toggleWishlist(id);
        addWishlist(id);
    };

    return (
        <>
            <div className="product mb-5 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl   transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/ProductDetails/${id}`}>
                    <a href="#">
                        <img
                            className="p-8 rounded-t-lg w-full hover:opacity-90  duration-300 transition-all transform hover:-translate-y-2 hover:scale-105"
                            src={imageCover}
                            alt={title}
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <span className="text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
                            {name}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-green-600 dark:text-green-400 mt-2">
                            {title.split(' ').slice(0, 2).join(' ')}
                        </h3>

                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                                {ratingsAverage}
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center justify-between p-4">
                    <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {price} EGP
                    </span>
                    <button onClick={handleWishlistClick} className="focus:outline-none">
                        <i
                            className={`fa-solid fa-heart text-3xl heart transition-colors duration-300 ${
                                isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
                            }`}
                        ></i>
                    </button>
                </div>

                <button
                    onClick={() => addToCart(id)}
                    className="btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full py-2.5 px-5 rounded-lg transition-all duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </>
    );
}