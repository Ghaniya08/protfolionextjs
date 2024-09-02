import React from "react";
import {FaYoutube , FaCode , FaDesktop , FaBook} from "react-icons/fa";
const Servises =()=>{
    return(
        <div id="Service">

       <div className="text-5xl ml-24 hover:underline hover:decoration-blue-500 text-blue-500"><h1>𝐌𝐲 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h1></div>
         <div className=" grid sm:max-w-xs md:max-w-3xl lg:grid-cols-2 sm:grid-cols-2 sm:justify-center md:ml-36 sm:ml-5 grid-cols-repeat: auto-fit minmax:(50px , 1fr) grid-auto-rows-50px gap-5 min-w-[100px] h-full mt-14 p-8 right-40  pr-9 top-32 left-40  md:pl-28 ">
         <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center ">
            <div className="text-blue-950 text-3xl md:ml-2 md:mb-2"><FaCode/></div>
         <h2 className="text-blue-900 text-2xl mb-2 "><strong> 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭</strong></h2>
               <p className="text-blue-700">As a skilled web developer, I craft robust, scalable, and efficient web applications that meet your 
                business needs. With expertise in HTML, CSS, and JavaScript, I deliver high-quality solutions that drive
                 results. From e-commerce platforms to custom web applications, I ll help you achieve your online goals.
                 
 </p>
         </div>
           <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center">
           <div className="text-blue-950 text-3xl ml-2 mb-2"><FaYoutube/></div>
               <h2 className="text-blue-900 text-2xl mb-2 "><strong>𝐌𝐚𝐤𝐢𝐧𝐠 𝐓𝐡𝐮𝐦𝐛𝐧𝐚𝐢𝐥 </strong></h2>
               <p  className="text-blue-700">As a skilled thumbnail maker, I create eye-catching and engaging thumbnails that capture the essence of 
                your content. My thumbnails are designed to increase click-through rates and drive more traffic to your
                 website. With my expertise, you can elevate your brand s online presence and make a lasting impression on
                  your audience</p>
           </div>
           <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 text-center">
           <div className="text-blue-950 text-3xl ml-2 mb-2"><FaDesktop/></div>
               <h2 className="text-blue-900 text-2xl mb-2 "><strong>𝐔𝐈/𝐔𝐗 𝐃𝐞𝐬𝐢𝐠𝐧𝐢𝐧𝐠</strong>               </h2>
               <p  className="text-blue-700">As a seasoned UI/UX designer, I specialize in creating intuitive and user-centered interfaces 
                that enhance user experience. My designs are tailored to meet your business goals and ensure seamless 
                interactions between your users and your digital products. From wireframing to prototyping, I ll work 
                closely with you to bring your vision to life.
               </p>
           </div>
           <div className="bg-dimgray p-10 text-sm font-light rounded-xl transition duration-500  bg-blue-100 hover:bg-blue-300 -translate-y-2.5 hover:-translate-y-5 ">
           <div className="text-blue-950 text-3xl ml-2 mb-2"><FaBook/></div>
               <h2 className="text-blue-900 text-2xl mb-2"><strong>𝐂𝐨𝐧𝐭𝐞𝐧𝐭 𝐖𝐫𝐢𝐭𝐢𝐧𝐠</strong></h2>
               <p  className="text-blue-700">With my content writing services, I produce high-quality, engaging, and informative content that
                 resonates with your target audience. Whether you need blog posts, articles, website content, or social 
                 media posts, I ll craft compelling stories that drive results. My content is optimized for SEO, ensuring
                  your brand s online visibility and credibility.
               </p>
           </div>
        
       </div>
       
       </div>
    )
}
export default Servises;