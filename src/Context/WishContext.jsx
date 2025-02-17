import axios from "axios";
import { useState, useEffect, createContext } from "react";
import {toast} from "react-hot-toast";

export const WishlistContext = createContext();

export default function WishlistContextProvider(props){
    const [Wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getWishlist(){
        try{
            const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers: { token: localStorage.getItem('token') }
            });
            console.log(res);
            setWishlist(res.data.data);
        }
        catch(error){
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getWishlist();
    }, []);

    async function addWishlist(id){
        try{
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, { productId: id }, {
                headers: { token: localStorage.getItem('token') }
            });
            console.log(res.data.data);
            toast.success("Product added to Wishlist!");
            await getWishlist();  
        }
        catch(error){
            console.log(error);
            toast.error("Failed to add product!");
        }
        finally {
            setLoading(false);
        }
    }

    async function removeWishlist(id) {
        try {
            const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                headers: { token: localStorage.getItem("token") }
            });
            console.log(res.data.data);
            toast.success("Product removed from Wishlist!");
            await getWishlist();
        } 
        catch (error) {
            console.log(error);
            toast.error("Failed to remove product!");
        }
    }

    const [wishlistItems, setWishlistItems] = useState([]);

    
    const toggleWishlist = (productId) => {
        if (wishlistItems.includes(productId)) {
            setWishlistItems(wishlistItems.filter((id) => id !== productId));
        } else {
            setWishlistItems([...wishlistItems, productId]);
        }
    };

    return (
        <WishlistContext.Provider value={{ Wishlist, getWishlist, addWishlist, removeWishlist, loading ,toggleWishlist , wishlistItems }}>
            {props.children}
        </WishlistContext.Provider>
    );
}
