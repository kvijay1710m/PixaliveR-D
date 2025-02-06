import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactForm = () => {
    return (
        <>
            <div className="container mt-4 mb-16 mx-auto px-14 md:px-28 py-10">
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Partner with Us
                </p>
                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium leading-snug">
                        Got a project to discuss? <br /> Get in touch
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Address */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-10">Address</h3>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-black text-4xl" />
                            <p>
                                Third Floor, 35/2, Hosur Rd, Konappana Agrahara,
                                Electronic City, Phase 2, Bengaluru, Karnataka
                                560100, India.
                            </p>
                        </div>
                    </div>

                    {/* Mail */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-10">Mail</h3>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-black text-xl" />
                            <p>support@pixalivernd.com</p>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-10">
                            Phone number
                        </h3>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-black text-xl" />
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-14 md:px-28">
                <h2 className="text-3xl font-bold">Drop us a line</h2>
                <p className="text-gray-600">
                    Use the form below or{" "}
                    <span className="font-semibold">send us an email.</span>
                </p>
                <form className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg text-gray-800 font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Fill in your name"
                                className="w-full p-2 text-lg text-gray-900 border-b border-gray-400 outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-800 font-medium">
                                Phone number (optional)
                            </label>
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="w-full p-2 text-lg text-gray-900 border-b border-gray-400 outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-800 font-medium">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Fill in your email"
                                className="w-full p-2 text-lg text-gray-900 border-b border-gray-400 outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-800 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full p-2 text-lg text-gray-900 border-b border-gray-400 outline-none focus:border-black"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-lg text-gray-800 font-medium">Message</label>
                        <textarea
                            placeholder="Fill in your message"
                            className="w-full p-2 text-lg border-b border-gray-900 outline-none focus:border-black h-24"
                        ></textarea>
                    </div>


                    <button className="mt-4 bg-black text-white px-6 py-4 rounded-3xl cursor-pointer transition duration-300 hover:bg-white hover:text-black border border-black">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
