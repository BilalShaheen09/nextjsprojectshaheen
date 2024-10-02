// pages/contact.tsx

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/navbar';

const Contact: React.FC = () => {
    return (
        <div>
            <Navbar />
            <section className="text-gray-400 body-font relative">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5">We would love to hear from you!</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 h-32 resize-none" />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Information</h2>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-indigo-500 w-6 h-6 mr-2" />
                            <p className="text-gray-400">Street No 27 , Newyork,USA </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-indigo-500 w-6 h-6 mr-2" />
                            <p className="text-gray-400">+923173123243</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-indigo-500 w-6 h-6 mr-2" />
                            <p className="text-gray-400">bilalkk130@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
