import React from "react"

import HomeProduct from "../Components/ProductHome"
import CarouselLayout from "../Components/Carousel"

function Home(){
    return(
    <div style={{margin:"2px"}}>
   
        <div className="main-container" style={{position:"relative"}}>
            <CarouselLayout/>
       </div>
      
       <section id="home-product">
       <div className="featured-product">
         <HomeProduct/>
       </div>
       </section>
    </div>
    );
}

export default Home