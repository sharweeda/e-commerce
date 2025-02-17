import axios from "axios";
import { createContext, useState, useEffect } from "react"; // أضفنا useEffect
import { toast } from "react-hot-toast";


export let CartContext = createContext();

export default function CartContextProvider(props) {
    let [numOfCartItems, setNumOfCartItems] = useState(0);
    let [allCartItems, setAllCartItems] = useState(null);
    let [totalPrice, setTotalPrice] = useState(0);
    let [cartId, setCartId] = useState(null);
    
    let [isAddingToCart, setIsAddingToCart] = useState(false);
    let [isGettingCartData, setIsGettingCartData] = useState(false);
    let [isUpdatingCart, setIsUpdatingCart] = useState(false);
    let [isRemovingFromCart, setIsRemovingFromCart] = useState(false);

    const headers = {
        token: localStorage.getItem('token'),
    };

    useEffect(() => {
        getCartData();
    }, []); 

    async function addToCart(productId) {
        setIsAddingToCart(true); 
        try {
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId }, { headers });
            console.log(res);
            if (res?.data?.status === 'success') {
                toast.success('Product added successfully');
                setNumOfCartItems(res.data.numOfCartItems);
                setTotalPrice(res.data.data.totalCartPrice);
            }
        } catch (error) {
            console.log(error, "error");
            toast.error('Something went wrong');
        } finally {
            setIsAddingToCart(false);
        }
    }

    async function getCartData() {
        setIsGettingCartData(true); 
        try {
            const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers });
            console.log(res);
            if (res.data.status === 'success') {
                setAllCartItems(res.data.data.products);
                setTotalPrice(res.data.data.totalCartPrice);
                setNumOfCartItems(res.data.numOfCartItems);
                setCartId(res.data.cartId);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsGettingCartData(false);
        }
    }

    async function updateProductCart(id, count) {
        setIsUpdatingCart(true); 
        try {
            const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count }, { headers });
            console.log(res);
            if (res.data.status === 'success') {
                setAllCartItems(res.data.data.products);
                setTotalPrice(res.data.data.totalCartPrice);
                setNumOfCartItems(res.data.numOfCartItems);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsUpdatingCart(false); 
        }
    }

    async function removeProductCart(id) {
        setIsRemovingFromCart(true); 
        try {
            const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers });
            console.log(res);
            if (res.data.status === 'success') {
                setAllCartItems(res.data.data.products);
                setTotalPrice(res.data.data.totalCartPrice);
                setNumOfCartItems(res.data.numOfCartItems);
                toast.success('Product removed successfully');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsRemovingFromCart(false); 
        }
    }

    async function clearProductCart() {
        setIsRemovingFromCart(true); 
        try {
            const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers });
            console.log(res);
            if (res.data.status === 'success') {
                setAllCartItems([]); 
                setTotalPrice(0); 
                setNumOfCartItems(0); 
                toast.success('Cart cleared successfully');
                getCartData();
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsRemovingFromCart(false); 
        }
    }

    return (
        <CartContext.Provider
            value={{
                addToCart,
                numOfCartItems,
                getCartData,
                allCartItems,
                removeProductCart,
                totalPrice,
                updateProductCart,
                cartId,
                setNumOfCartItems,
                clearProductCart,
                isAddingToCart,
                isGettingCartData,
                isUpdatingCart,
                isRemovingFromCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}