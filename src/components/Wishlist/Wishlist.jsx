import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../Context/WishContext";
import { CartContext } from "../../Context/CartContext";
import { ThreeDots } from "react-loader-spinner";

export default function Wishlist() {
    const { Wishlist, getWishlist, removeWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                await getWishlist();
            } catch (error) {
                console.error("Failed to fetch wishlist:", error);
            } finally {
                setIsLoading(false); 
            }
        };

        fetchWishlist();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ThreeDots
                    height={80}
                    width={80}
                    radius={9}
                    color="#4fa94d"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (
        <div className="container p-8">
            <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">My Wish List</h2>

                {Wishlist.length === 0 ? (
                    <p className="text-gray-500 text-center">Your wishlist is empty.</p>
                ) : (
                    <ul className="space-y-4">
                        {Wishlist.map((product) => (
                            <li key={product.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <img src={product.imageCover} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <p className="text-green-600 font-medium">{product.price} EGP</p>
                                        <button
                                            className="text-red-500 flex items-center space-x-1 hover:underline mt-2"
                                            onClick={() => removeWishlist(product.id)}
                                        >
                                            <span><i className="fa-solid fa-trash"></i> Remove</span>
                                        </button>
                                    </div>
                                </div>
                                <button onClick={() => addToCart(product.id)} className="border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition">
                                    Add To Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}