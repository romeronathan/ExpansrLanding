import React, { useContext, useRef } from "react";
import Image from "next/image";
import Feature from '../components/feature-header';
import { ScrollContext } from "./scroll-observer";
const Header = () => {



  return (
    <div
      className="
    sticky top-0
     flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full -z-10">
      <div className="flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

              </p>
            </div>
            <h2 className="drop-shadow-md max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Technology solutions for scale.
            </h2>
            <p className="drop-shadow-md text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <button
            type="submit"
            className="hover:bg-blue-100 inline-flex bg-white items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400  focus:shadow-outline focus:outline-none"
          >
            Get in touch.
          </button>
        </div>
      </div>
    </div >



  );
};
export default Header;