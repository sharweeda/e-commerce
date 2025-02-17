import React from 'react'
import amazon from "../../assets/images/amazon-pay.png"
import american from "../../assets/images/American-Express-Color.png"
import master from "../../assets/images/mastercard.webp"
import paypal from "../../assets/images/paypal.png"
import appstore from "../../assets/images/get-apple-store.png"
import googleplay from "../../assets/images/get-google-play.png"
export default function Footer() {
  return (
    <>
    
    <footer className="p-8 bg-gray-200">
    <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-2">Get the FreshCart app</h3>
        <p className="text-gray-600 mb-6">We will send you a link, open it on your phone to download the APP.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <input
                type="email"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email.."
            />
            <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-12 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Share App Link
            </button>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <p className="text-gray-600">Payment Partners</p>
                <img src={amazon} className="w-20" alt="amazon" />
                <img src={american} className="w-20" alt="american" />
                <img src={master} className="w-20" alt="mastercard" />
                <img src={paypal} className="w-20" alt="paypal" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <p className="text-gray-600">Get deliveries with FreshCart</p>
                <img src={appstore} className="w-20" alt="appstore" />
                <img src={googleplay} className="w-20" alt="googleplay" />
            </div>
        </div>
    </div>
</footer>
    
    
    </>
  )
}
