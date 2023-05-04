import Hero from "../components/Hero";
import image1 from "../assets/travel22.jpg";

import Footer from "../components/Footer";
function Service (){


    return (
        <>
          <Hero 
          cName="hero-mid"
          img={image1}
          title="Service"
          btnClass="hide" />

          <Footer/>
        </>
        
        
    )

}
export default Service;