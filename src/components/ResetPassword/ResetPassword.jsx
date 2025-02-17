import axios from 'axios';
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [isLoading , setIsLoading] =useState(false);
    const [email , setEmail] =useState();
    const [newPassword , setNewPassword] =useState();
    const [message , setMessage] =useState("");
    const [isError , setIsError] =useState(false);
    const navigate =useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.put(
                "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
                { email , newPassword },
                
                {
                    headers: {
                        token: localStorage.getItem('token'),
                    },
                }
            );
            console.log(response);
            setMessage("Password reset successfully.");
            setIsError(false);
            navigate('/login');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || "An error occurred while resetting the password.");
            } else if (error.request) {
                setMessage("No response received from the server.");
            } else {
                setMessage("An error occurred while setting up the request.");
            }
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
        {isLoading ? <div className="flex justify-center items-center h-screen">
                        <ThreeDots
                            height={80}
                            width={80}
                            radius={9}
                            color="#4fa94d"
                            ariaLabel="loading"
                        />
                    </div> : <div className="container m-auto py-8">
        <h2 className='text-green-500 font-semibold text-center'>reset your account password</h2>

        <form onSubmit={handleResetPassword} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">

            <div className="relative z-0 w-full  mb-5 group">
                <input onChange={(e)=>setEmail(e.target.value)}  type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>


            <div className="relative z-0 w-full  mb-5 group">
                <input  onChange={(e)=>setNewPassword(e.target.value)}   type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            
                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                {isLoading ? "Resetting Password..." : "Reset Password"}
                </button>
        </form>
        {message && (
                    <div
                        className={`mt-4 p-4 rounded-lg text-center ${
                            isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                        }`}
                    >
                        {message}
                    </div>
                )}
    </div> }
    
        
        
        </>
    )
}
