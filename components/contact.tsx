"use client";
import React from "react";
import Swal from "sweetalert2";
import { FaInstagram, FaFacebook , FaPhone , FaLinkedin ,FaEnvelope , FaGithub, FaPhoneAlt} from "react-icons/fa";
const Contact =()=>{

    const onSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "30c787a3-d0e8-460d-8f5b-cc8e4228caed");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success"
              });
        }
      };
      

    return ( 
        <div id="Contact">
           

            <div  className="text-5xl ml-24  hover:underline hover:decoration-blue-500 text-blue-500">
                <h2>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐞</h2></div> 
                <div className="">
            
            
           <div > <span className="inline-flex text-xl space-x-2 text-blue-400 ml-24  mt-7"> <FaPhone/> <pre>  𝟎𝟑𝟑-𝟐𝟑𝟏𝟏𝟖𝟎𝟕𝟔  </pre></span></div>
           <div > <span className="inline-flex text-xl space-x-2 text-blue-400 ml-24  mt-7">  <FaEnvelope/><pre>  𝐠𝐡𝐚𝐧𝐢𝐲𝐚𝐚𝐤𝐡𝐚𝐧𝐧𝟎𝟖@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦</pre> </span></div>
           <div > <span className="inline-flex text-3xl hover:text-blue-500 space-x-2 text-blue-400 ml-24  mt-7"><a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook/></a>  <a href="https://instagram.com/ghaniya08"><FaInstagram/></a>  <a href="https://github.com/Ghaniya08"><FaGithub/></a> <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"><FaLinkedin/></a></span></div>
       </div>
        
        <section  className="flex md:ml-72 h-44 ">
            <form onSubmit={onSubmit} >
                
                <div className="mt-4">
                   
                    <input className="md:w-[650px]  h-8 border-2 bg-blue-200 p-6 border-solid border-blue-300 outline-none rounded-lg  text-lg ml-2 text-blue-800 " type="text" placeholder="Enter Your Name " name="Name" required />
                </div>
                <div>
                    <input  className="md:w-[650px] mt-3 h-8 bg-blue-200 border-2 p-6 border-solid border-blue-300 outline-none rounded-lg  ml-2 text-blue-800 text-lg " type="email" placeholder="Enter Your Email " name="Email" required />
                </div>
                <div>
                   
                    <textarea className="h-52 md:w-[650px] mt-3 bg-blue-200  border-2 border-solid border-blue-300 outline-none rounded-lg p-6 text-lg ml-2 text-blue-800" name="Message" id=""  placeholder="Enter Your Message " required ></textarea>
                </div>
                <button className="md:w-[200px] h-7 bg-blue-200 border-solid  rounded-md cursor-pointer border-2 p-6  border-blue-400 ml-2 mt-4 text-blue-600 transition-shadow hover:bg-blue-300 " type="submit"> Send Message</button>
            </form>
        </section>
        </div>
    )
}
export default Contact;