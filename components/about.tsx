"use client";
import React from "react";
import Image from "next/image";
import aboutpic from  "../public/aboutpic.jpg" ;
import { FaHtml5 , FaCss3 , FaJs} from  "react-icons/fa" ;
import { SiTailwindcss , SiNextdotjs ,SiTypescript } from  "react-icons/si" ;
const Aboutsec =()=>{
    return (
        <div id="About">
           <h1 className="text-blue-500 text-6xl text-center mt-52 "><pre>𝐀𝐛𝐨𝐮𝐭 𝐌𝐞</pre></h1>
          <div className="lg:flex lg:justify-between items-center lg:mb-4">
        <div className= "lg:w-1/2 text-blue-400 lg:ml-24 ">
                <h1>𝐈 𝐦 𝐆𝐡𝐚𝐧𝐢𝐲𝐚 𝐊𝐡𝐚𝐧, 𝐚 𝟏𝟕-𝐲𝐞𝐚𝐫-𝐨𝐥𝐝 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐰𝐢𝐭𝐡 𝐚 𝐬𝐭𝐫𝐨𝐧𝐠 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐟𝐨𝐫 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐚𝐧𝐝
                     𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧. 𝐖𝐢𝐭𝐡 𝐚 𝐬𝐨𝐥𝐢𝐝 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐈𝐓, 𝐈 𝐯𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 𝐢𝐧 𝐛𝐨𝐭𝐡 𝐟𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐚𝐧𝐝 𝐛𝐚𝐜𝐤𝐞𝐧𝐝 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭, 𝐚𝐬 𝐰𝐞𝐥𝐥 𝐚𝐬
                      𝐔𝐈/𝐔𝐗 𝐝𝐞𝐬𝐢𝐠𝐧. 𝐌𝐲 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐬𝐤𝐢𝐥𝐥𝐬 𝐢𝐧𝐜𝐥𝐮𝐝𝐞 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐢𝐧 𝐇𝐓𝐌𝐋, 𝐂𝐒𝐒, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, 𝐚𝐧𝐝 𝐈 𝐦 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 
                      𝐞𝐱𝐩𝐥𝐨𝐫𝐢𝐧𝐠 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬 𝐚𝐧𝐝 𝐑𝐞𝐚𝐜𝐭.𝐀𝐬 𝐚 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐥𝐞𝐚𝐫𝐧𝐞𝐫, 𝐈 𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐞𝐤𝐢𝐧𝐠 𝐧𝐞𝐰 𝐜𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞𝐬 𝐚𝐧𝐝 
                      𝐨𝐩𝐩𝐨𝐫𝐭𝐮𝐧𝐢𝐭𝐢𝐞𝐬 𝐭𝐨 𝐠𝐫𝐨𝐰, 𝐰𝐢𝐭𝐡 𝐚 𝐟𝐨𝐜𝐮𝐬 𝐨𝐧 𝐜𝐥𝐨𝐮𝐝 𝐜𝐨𝐦𝐩𝐮𝐭𝐢𝐧𝐠 𝐚𝐧𝐝 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐯𝐞 𝐀𝐈. 𝐌𝐲 𝐠𝐨𝐚𝐥 𝐢𝐬 𝐭𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐚 𝐜𝐥𝐨𝐮𝐝 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐚𝐧𝐝 𝐦𝐚𝐤𝐞
                       𝐚 𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐞 𝐢𝐦𝐩𝐚𝐜𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐭𝐞𝐜𝐡 𝐢𝐧𝐝𝐮𝐬𝐭𝐫𝐲. 𝐖𝐢𝐭𝐡 𝐚 𝐬𝐭𝐫𝐨𝐧𝐠 𝐰𝐨𝐫𝐤 𝐞𝐭𝐡𝐢𝐜 𝐚𝐧𝐝 𝐚 𝐝𝐫𝐢𝐯𝐞 𝐭𝐨 𝐬𝐡𝐚𝐫𝐞 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞, 𝐈 𝐦 𝐞𝐱𝐜𝐢𝐭𝐞𝐝 𝐭𝐨 
                       𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐞 𝐰𝐢𝐭𝐡 𝐨𝐭𝐡𝐞𝐫𝐬 𝐚𝐧𝐝 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐞 𝐭𝐨 𝐞𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬. 𝐖𝐡𝐞𝐭𝐡𝐞𝐫 𝐢𝐭 𝐬 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐢𝐧𝐠 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 𝐨𝐫 𝐦𝐞𝐧𝐭𝐨𝐫𝐢𝐧𝐠 
                       𝐨𝐭𝐡𝐞𝐫𝐬, 𝐈 𝐦 𝐜𝐨𝐦𝐦𝐢𝐭𝐭𝐞𝐝 𝐭𝐨 𝐮𝐬𝐢𝐧𝐠 𝐦𝐲 𝐬𝐤𝐢𝐥𝐥𝐬 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐚 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐚𝐧𝐝 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐭𝐨 𝐚𝐜𝐡𝐢𝐞𝐯𝐞 𝐦𝐲 𝐠𝐨𝐚𝐥𝐬.</h1>
          </div>
        <div className="w-1/2 flex justify-end mr-36  ">
          <Image src={aboutpic} alt="" className="w-48 hidden sm:hidden md:hidden lg:block"/>
         </div>
      </div>
      <div>
       
        < h1 className="text-blue-500 text-5xl hover:underline hover:decoration-blue-500 lg:ml-24"> <strong>𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧</strong> </h1> <br />
                < div className="    grid lg:max-w-4xl lg:grid-cols-2 lg:grid-rows-2  h-full right-40 pl-16 pr-9 text-blue-400 top-32 left-40 rounded-xl grid-cols-repeat: auto-fit minmax:(50px , 1fr) grid-auto-rows-50px gap-5 min-w-[100px] mt-2 lg:ml-20 p-8 ">
          <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center"><h1 className="mt-2 mb-2 text-blue-700">Current</h1><h1 className="text-blue-800 text-xl mt-2 mb-2" >𝐍𝐞𝐱𝐭.𝐉𝐬</h1 >  <h1 className="mt-2 mb-2 text-blue-700" >GIAIC</h1></div>
          <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center"><h1 className="mt-2 mb-2 text-blue-700">2024</h1> <h1 className="text-blue-800 text-xl mt-2 mb-2">𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 </h1> <h1 className="mt-2 mb-2 text-blue-700">Online course Platform</h1></div>
          <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center"><h1 className="mt-2 mb-2 text-blue-700">2024</h1 > <h1 className="text-blue-800 text-xl mt-2 mb-2">𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐂𝐨𝐮𝐫𝐬𝐞</h1> <h1 className="mt-2 mb-2 text-blue-700">GIAIC</h1></div>
          <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center"><h1 className="mt-2 mb-2 text-blue-700">2024</h1> <h1 className="text-blue-800 text-xl mt-2 mb-2">𝐆𝐫𝐚𝐩𝐡𝐢𝐜 𝐃𝐞𝐬𝐢𝐠𝐧𝐢𝐧𝐠</h1> <h1 className="mt-2 mb-2 text-blue-700">Online course Platform</h1></div>
          </div>
      </div>
      <div>
      < h1 className="text-blue-500 text-5xl hover:underline hover:decoration-blue-500 ml-24"> <strong>𝐒𝐤𝐢𝐥𝐥𝐬</strong> </h1><br />
        <div className="lg:w-full lg:h-full flex  lg:flex-col lg:gap-[30px]  text-center lg:text-left lg:max-w-5xl grid-rows-3  sm:grid-cols-2 ">
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-3 sm:grid sm:grid-cols-2 sm:grid-rows-2   xl:gap-x-2  text-blue-400 lg:ml-48 lg:gap-2 ">
      <div className="text-6xl group-hover:text-accent mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100 rounded-xl ml-10  h-20 pt-3 pl-2"><FaHtml5/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100  ml-10  rounded-xl h-20 pt-3 pl-2"><FaCss3/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100 ml-10  h-20 pt-3 rounded-xl pl-2"><SiTypescript/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100 ml-10  h-20 rounded-xl pt-3 pl-2"> <FaJs/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100 ml-10  h-20 rounded-xl pt-3 pl-2" ><SiNextdotjs/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-blue-300 dark:border-blue-300 bg-blue-100 ml-10  h-20 rounded-xl  pt-3 pl-2"> <SiTailwindcss/></div>
          </div>
        </div > 
      </div>
    </div > 
      )
}

export default Aboutsec;
