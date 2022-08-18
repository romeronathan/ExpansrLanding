import React, { useContext, useRef } from "react";
import Image from "next/image";
import Feature from '../components/feature-header';
import { ScrollContext } from "./scroll-observer";
const Header = () => {



  return (
    <div
      className="
    back-image overflow-hidden  sticky flex flex-col-reverse top-0 px-4 py-20 lg:block lg:py-32 xl:py-48  md:px-2 sm:max-w-xl md:max-w-full -z-10 min-w-screen">
      <div className="drop-shadow-xl flex justify-end h-full -mx-10 overflow-hidden lg:pt-24 lg:pb-16  xl:pl-0 lg:w-1/2 lg:absolute  lg:bottom-0 lg:right-0 lg:items-center">
        <img
          src="/laptop.png"
          className="drop-shadow-xl object-cover object-left w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-center lg:justify-start max-w-screen-xl mx-auto ">
        <div className="mb-16 lg:mb-0">

          <div className="max-w-xl mb-6">

            <h2 className="mb-6 f text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl sm:leading-none ">
              Technology solutions for <span className="bg-clip-text font-extrabold text-transparent 
               bg-gradient-to-r bg-clip-text text-transparent 
               from-primary via-primary-light to-primary
               animate-text">scale.</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors t duration-150 transform sm:w-auto bg-gradient-to-l from-primary to-primary-light hover:from-blue-600 hover:to-blue-600">

              <span className="mx-2">
                Get in touch.
              </span>
            </a>
          </div>
        </div>

      </div>
    </div >



  );
};
export default Header;