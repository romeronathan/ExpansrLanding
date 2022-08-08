import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="drop-shadow-md bg-white mx-auto lg:py-4  md:max-w-full  md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a

                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Product
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Pricing
                        </a>
                    </li>
                </ul >
                <div className="flex flex-col content-center justify-center">

                    <a>expansr</a>
                </div>

                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a

                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            About us
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Sign in
                        </a>
                    </li >
                    <li>
                        <a

                            aria-label="Sign up"
                            title="Sign up"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Sign up
                        </a>
                    </li >
                </ul >
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className=" p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a

                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >


                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a

                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="Sign in"
                                                title="Sign in"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Sign in
                                            </a>
                                        </li >
                                        <li>
                                            <a

                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md text-black focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Contact Us
                                            </a>
                                        </li >
                                    </ul >
                                </nav >
                            </div >
                        </div >
                    )}
                </div >
            </div >
        </div >
    );
};

export default Navbar;