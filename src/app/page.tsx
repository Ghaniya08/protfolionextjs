import Image from "next/image";
import React from "react";

// import Navbar from "../../components/navbar";
import Homepage from "../../components/homepage";
import Aboutsec from "../../components/about";
import Servises from "../../components/services";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NavigationBar from "../../components/navbar";
export default function Homes() {
  return (
    <div>
      <div >
      {/* <Navbar/> */}
      <NavigationBar/>
      <Homepage/>
      <Aboutsec/>
      <Servises/>
      <Contact/>
      
    </div>
    <Footer/>
    </div>
    
    
  );
}
// className="bg-gradient-to-tr from-white via-blue-100 to-white h-screen"
