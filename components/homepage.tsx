import React from "react";
import Image from "next/image";

import homepic1 from '../public/homepic1.jpg'
const Homepage = ()=>{
    return(
       <div id="header">
         <div className="lg:flex-wrap lg:relative lg:flex lg:m-5  ">
            <Image src={homepic1} alt="" placeholder="blur" className="lg:mt-14"/>
            <div className="text-4xl text-blue-500 lg:mt-40 lg:ml-6 ">
            <h1><pre>  𝐇𝐞𝐲 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 </pre></h1><br />
            <h1><pre>  𝐈 𝐦 𝐆𝐡𝐚𝐧𝐢𝐲𝐚 𝐊𝐡𝐚𝐧 </pre></h1><br />
            <h1><pre>  𝐅𝐫𝐨𝐦 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧 </pre></h1>
            </div>
        </div>
       </div>
    )
}
export default Homepage;