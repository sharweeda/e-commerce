import { useFormik } from 'formik'
import React, {  useContext, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


export default function Register() {
    let navigate = useNavigate();
    let {setToken} =useContext(UserContext);
    const [apiError, setApiError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handelRegister(values) {
        setIsLoading(true);
        console.log(values);
        console.log("Register");

        try {
            navigate('/Login');
            const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
            console.log(response);
            setToken(response?.data?.token);
            localStorage.setItem('token', response?.data?.token )
            
        } 
        catch (error) {
            setApiError(error?.response?.data?.message );
            console.error(error);
        } 
        finally {
            setIsLoading(false);
        }
    }

    const validationSchema = yup.object().shape({
        name:yup.string().required('name is required').min(3,'min 3 chars').max(20,'max 20 chars'),
        email: yup.string().required('email is required').email('please enter valid email'),
        password: yup.string().required('password is required').matches(/^[A-Z][a-z]{5,10}$/,'from 5 to 10 max'),
        rePassword: yup.string().required('rePassword is required').oneOf([yup.ref('password')],'rePassword not matches'),
        phone: yup.string().required("phone is required").matches(/^01[1250][0-9]{8}$/ , "please enter is Egyption number"),
    
    })
    
    
    
    
        const formik = useFormik({
            initialValues:{
                name:'',
                email:'',
                password:'',
                rePassword:'',
                phone:'',
            },
        onSubmit: handelRegister,
        validationSchema,
    })

    return (
    <>
    {apiError?<div className="p-4 mb-4 text-sm my-6 m-auto w-96 text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert">{apiError}</div> : null} 

    <div className="container m-auto  py-8  ">
        <h2 className='text-center  font-semibold text-green-500' >Register Now :</h2>

    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  bottom-0  border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
        </div>

        {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert">
            {formik.errors.name} </div> : null} 

        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  bottom-0  border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert"> {formik.errors.email}  </div> : null} 


        <div className="relative z-0 w-full  mb-5 group">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange}   type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert">{formik.errors.password}</div> : null}


        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  bottom-0  border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert"> {formik.errors.rePassword} </div> : null}


        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  bottom-0  border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
        </div>
        {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-lightblue-800 dark:text-red-500" role="alert"> {formik.errors.phone}</div> : null}
        
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        {isLoading ? <i className="fa-solid fa-spinner"></i> :' Register'}</button>
    </form>
</div></>);
}








