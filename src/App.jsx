import React from 'react'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Error from './components/Error/Error'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import  {QueryClient, QueryClientProvider } from 'react-query'
import CartContextProvider from './Context/CartContext'
import {Toaster} from 'react-hot-toast' 
import Order from './components/Order/Order'
import Wishlist from './components/Wishlist/Wishlist'
import WishlistContextProvider from './Context/WishContext'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import ResetCode from './components/ResetCode/ResetCode'
import ResetPassword from './components/ResetPassword/ResetPassword'




const queryClient = new QueryClient()

export default function App() {

const routes = createHashRouter([{ path:'', element: <Layout/> , children:[
  {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
  {path:"cart" , element:<ProtectedRoute><Cart/></ProtectedRoute> },
  {path:"wishlist" , element:<ProtectedRoute><Wishlist/></ProtectedRoute> },
  {path:"products" , element:<ProtectedRoute><Products/></ProtectedRoute> },
  {path:"categories" , element:<ProtectedRoute><Categories/></ProtectedRoute> },
  {path:"brands" , element:<ProtectedRoute><Brands/></ProtectedRoute> },
  {path:"ProductDetails/:id" , element:<ProtectedRoute><ProductDetails/></ProtectedRoute> },
  {path:"order" , element:<ProtectedRoute><Order/></ProtectedRoute> },
  {path:"forget" , element:<ForgetPassword/> },
  {path:"reset" , element:<ResetCode/> },
  {path:"resetpassword" , element:<ResetPassword/> },
  {path:"login" , element:<Login/> },
  {path:"register" , element:<Register/> },
  {path:"*" , element:<Error/> },
]
}])

  return (
    <>
    <UserContextProvider>
    <WishlistContextProvider>
    <CartContextProvider>
      <QueryClientProvider  client = {queryClient}>
      <RouterProvider  router={routes}></RouterProvider>
      <Toaster/>
      </QueryClientProvider>
    </CartContextProvider>
    </WishlistContextProvider>
    </UserContextProvider>
    
    
    
    
    </>
  )
}
