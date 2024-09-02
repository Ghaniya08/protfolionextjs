"use client";
import React from "react";
import Link from "next/link";
import { useState } from 'react';
export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  // Function to close the mobile menu
  const handleMenuClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <nav className="bg-blue-500 text-white">
        {/* Desktop View */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:px-10 lg:py-3">
        <div className="flex flex-col items-center">
             <div className="border-r-2 border-white w-full  max-w-20 -mt-0 text-white text-2xl right-38 mr-96 left-36 top-5 p-3 h-5 z-0 content: '' absolute
      solid to-white border-t-2 solid bottom-0"></div>
             <h1 className="font-bold tracking-wide text-white   left-3  p-2 h-4 z-0 text-base  absolute top-4">ＧＨＡＮＩＹＡ ＫＨＡＮ</h1>
             <div className="border-b-2 border-white w-full  max-w-20 mt-2 text-white text-2xl  left-2 top-5 p-3 h-5 z-0 content: '' absolute
      solid to-white border-l-2 solid bottom-0 "></div>
           </div>
           <ul className="flex gap-9 justify-center  pb-3 text-xl">
           <li className="inline-block list-none m-[10px] mx-20px hover:underline hover:decoration-white]"> <a href="#header"> 𝐇𝐨𝐦𝐞</a></li>
                      <li className="inline-block list-none m-[10px] mx-20px hover:underline hover:decoration-white]"> <a href="#About">𝐀𝐛𝐨𝐮𝐭</a></li>
                      <li className="inline-block list-none m-[10px] mx-20px hover:underline hover:decoration-white] "><a href="#Service">𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</a></li>
                    <li className="inline-block list-none m-[10px] mx-20px hover:underline hover:decoration-white] "><a href="#Contact">𝐂𝐨𝐧𝐭𝐚𝐜𝐭</a></li>
           </ul>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex justify-between items-center p-3">
        <div className="flex flex-col items-center">
             <div className="border-r-2 border-white w-full  max-w-20 -mt-0 text-white text-2xl right-38 mr-96 left-36 top-5 p-3 h-5 z-0 content: '' absolute
      solid to-white border-t-2 solid bottom-0"></div>
             <h1 className="font-bold tracking-wide text-white   left-3  p-2 h-4 z-0 text-base  absolute top-4 mb-4">ＧＨＡＮＩＹＡ ＫＨＡＮ</h1>
             <div className="border-b-2 border-white w-full max-w-20 mt-0 text-white text-2xl  left-2 top-5 p-3 h-5 z-0 content: '' absolute
      solid to-white border-l-2 solid bottom-0 "></div>
           </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-blue-700 bg-opacity-75 z-50 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center mt-20 space-y-6">
            <a
              href="#header"
              className="text-white text-xl hover:underline"
              onClick={handleMenuClick}
            >
              𝐇𝐨𝐦𝐞
            </a>
            <a
              href="#About"
              className="text-white text-xl hover:underline"
              onClick={handleMenuClick}
            >
              𝐀𝐛𝐨𝐮𝐭
            </a>
            <a
              href="#Service"
              className="text-white text-xl hover:underline"
              onClick={handleMenuClick}
            >
              𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬
            </a>
            <a
              href="#Contact"
              className="text-white text-xl hover:underline"
              onClick={handleMenuClick}
            >
              𝐂𝐨𝐧𝐭𝐚𝐜𝐭
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
