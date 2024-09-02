import React from "react";
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

