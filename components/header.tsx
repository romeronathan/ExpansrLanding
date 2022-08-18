import React, { useContext, useRef } from "react";
import Image from "next/image";
import Feature from '../components/feature-header';
import { ScrollContext } from "./scroll-observer";
const Header = () => {



  return (
    <div
      className="
    back-image overflow-hidden  sticky flex flex-col-reverse top-0 px-4 py-20 lg:block lg:py-32 xl:py-48  md:px-2 sm:max-w-xl md:max-w-full -z-10 min-w-screen">
      <div className="flex justify-end h-full -mx-10 overflow-hidden lg:pt-24 lg:pb-16  xl:pl-0 lg:w-1/2 lg:absolute  lg:bottom-0 lg:right-0 lg:items-center">
        <img
          src="/laptop.png"
          className="object-cover object-left w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-center lg:justify-start max-w-screen-xl mx-auto ">
        <div className="mb-16 lg:mb-0">

          <div className="max-w-xl mb-6">

            <h2 className="mb-6 f text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl sm:leading-none ">
              Technology solutions for <span className="bg-clip-text font-extrabold text-transparent 
               bg-gradient-to-r bg-clip-text text-transparent 
               from-dark-blue via-blue-500 to-dark-blue
               animate-text">scale.</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <a href="#_" className="relative w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
            Get Started
          </a>
        </div>

      </div>
    </div >



  );
};
export default Header;