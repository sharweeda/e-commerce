import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

export default function Order() {
    const {cartId , setNumOfCartItems} = useContext(CartContext);
    const [payment , setPayment] = useState();
    const navigate = useNavigate();

    function handelDetails(values){
        console.log(values);
        if(payment == 'cash'){
            cashOrder(values)
        }else if(payment == 'visa'){
            visaOrder(values)
        }
        
    }
    async function cashOrder(values){
        console.log('cash Order');
        try{
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, values , {
                headers:{
                    token: localStorage.getItem('token')
                } 
            })
            console.log(res);
            if(res.data.status == 'success'){
                toast.success('Order Cash Sccessfully ');
                setNumOfCartItems(0);
                navigate('/cart');
            }
            
        }
        catch(error){
            console.log(error);
            
        }
    }
    async function visaOrder(values){
        console.log('visa Order');
        try{
            
            const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,values ,{
                headers:{
                    token:localStorage.getItem('token')
                },
                params:{
                    url: "https://sharweeda.github.io/e-commerce/#"
                }
            })
            console.log(res);
            window.open(res.data.session.url,'_blank')
        }
        catch(error){
            console.log(error);
        }
    }
    

    const formik = useFormik({
        initialValues:{
            shippingAddress:{
                details: "",
                phone: "",
                city: ""
            },
        },
        onSubmit:handelDetails,
    })

    return (
        <>
        <div className="container m-auto py-8">
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto  bg-white p-6 rounded-lg shadow-lg">

            <div className="relative z-0 w-full  mb-5 group">
                <input  onChange={(e)=>formik.setFieldValue('shippingAddress.details', e.target.value)}  type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details </label>
            </div>


            <div className="relative z-0 w-full  mb-5 group">
                <input  onChange={(e)=>formik.setFieldValue('shippingAddress.phone', e.target.value)}   type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
            </div>

            <div className="relative z-0 w-full  mb-5 group">
                <input onChange={(e)=>formik.setFieldValue('shippingAddress.city', e.target.value)}  type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
            </div>

            <div className="flex items-center">
                <button onClick={()=>setPayment('cash')} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cash Order</button>
                <button onClick={()=>setPayment('visa')} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">visa Order</button>
            </div>        
        </form>
        </div>
            
        
        </>
    )
}
