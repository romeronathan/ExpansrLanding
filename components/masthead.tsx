import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
    return (
        <div className="h-14 bg-gradient-to-tl from-blue-100 to-blue-400 min-h-screen flex flex-col scroll items-center justify-center">
            
            <div className="drop-shadow-md p-12 font-bold">
                <h1 className="text-white mb-6 text-4xl xl:text-5xl">Technology solutions for scale.</h1>
                <h2 className="text-white mb-2 text-2xl xl:text-3xl tracking-tight">
                   <span>Lorem ipsum dolor sit amet,</span> </h2>
            </div>
        </div>
    );

}

export default Masthead;