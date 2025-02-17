import React, { useContext }  from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/freshcart-logo.svg"
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
  const {numOfCartItems} = useContext(CartContext)
  let navigate =useNavigate();
  let {Token , setToken} =useContext(UserContext);
  function LogOut(){
    localStorage.removeItem('token');
    setToken(null);
    navigate('/Login')
  }
  return (
    <>
    

    <nav className="bg-gray-500 z-50 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-8" alt="Flowbite Logo" />
    </NavLink>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      {Token ? (
        <ul className="font-medium flex flex-col p-4  mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3  rounded-lg text-gray-950  md:bg-transparent  dark:text-white"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="block py-2 px-3 rounded-lg text-gray-950  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className="block py-2 px-3 rounded-lg text-gray-950  hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Wish list
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products"
              className="block py-2 px-3 rounded-lg text-gray-950  hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className="block py-2 px-3 rounded-lg text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className="block py-2 px-3 rounded-lg text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Brands
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>

    <div className="social flex gap-4">
      <i className="fa-brands fa-instagram text-xl hover:text-blue-500"></i>
      <i className="fa-brands fa-facebook text-xl hover:text-blue-500"></i>
      <i className="fa-brands fa-tiktok text-xl hover:text-blue-500"></i>
      <i className="fa-brands fa-twitter text-xl hover:text-blue-500"></i>
      <i className="fa-brands fa-linkedin text-xl hover:text-blue-500"></i>
      <i className="fa-brands fa-youtube text-xl hover:text-blue-500"></i>
    </div>

    <div className="flex items-center gap-4">
      {Token ? (
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <button>
              <i className="fa-solid fa-cart-shopping text-green-500 mx-2 text-2xl">
                <sup className='py-2 px-3 mx-1 bg-green-400 rounded-xl text-white'>{numOfCartItems}</sup>
              </i>
            </button>
          </Link>
          <button
            onClick={LogOut}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
            Log Out
          </button>
        </div>
      ) : (
        <>
          <Link to="/login">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Login</button>
          </Link>
          <Link to="/register" >
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Register</button>
          </Link>
        </>
      )}
    </div>
  </div>
</nav>



    
    
    
    </>
  )
}
