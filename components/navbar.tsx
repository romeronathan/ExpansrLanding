import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { ScrollContext } from "./scroll-observer";
import { FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;
    let scrolled = false;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.offsetHeight);
        console.log(progress);
        scrolled = progress == 1;
    }



    return (
        <div
            style={{ backgroundColor: scrolled ? "white" : "white" }}
            className={`px-6 py-1 ease-in-out duration-300  flex justify-center fixed top-0 ${scrolled ? 'drop-shadow-xl' : ''} w-full z-50`}>

            <div ref={refContainer} className="  w-full relative flex items-center justify-between">


                <a

                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <Image src="/logo.png" alt="logo" width={200} height={80} />

                </a>
                <ul className="flex items-center hidden space-x-12 lg:flex p-3">
                    <li>
                        <a

                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                            Product
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a

                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                            About us
                        </a>
                    </li>
                    <li>
                        {/* <button
                            type="submit"
                            className={`ease-in-out duration-300 cursor-pointer ease-in-out duration-300 hover:scale-105 inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md 
                            ${scrolled ? 'bg-gradient-to-r from-blue-300 to-primary' : "bg-white text-black"} focus:shadow-outline focus:outline-none`}
                        >
                            Contact Us
                        </button> */}
                    </li>

                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
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
                                            <Image width={150} height={50} src="/logo.png" alt="logo" />
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
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
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a

                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;
