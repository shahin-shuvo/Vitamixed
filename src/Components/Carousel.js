import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
const carouselList = [
    {
        image: "/static/images/burger.jpg",
        title : "HIGH QUALITY INGREDIENTS",
        description: "OUR FOCUS ON QUALITY"
    },
    {
        image: "/static/images/food2.jpg",
        title : "WE PROVIDE HALAL FOOD",
        description: "AUTHENTIC TASTE"
    },
    {
        image: "/static/images/sandwitch.jpg",
        title : "PREMIUM QUALITY",
        description: "NO COMPROMISE WITH TASTE"
    }
]

const renderTooltip = (props) => (
    <Tooltip id="scrol-tooltip" {...props}>
            EXPLORE OUR ITEMS
    </Tooltip>
  );

function CarouselLayout() {
    const ListItems = [];
    for (const [index, value] of carouselList.entries()) {
        ListItems.push( 
        <Carousel.Item>
           <img style={{height:"80vh"}} className="d-block w-100" src={value["image"]} alt="First slide"/>
            <Carousel.Caption>
                <div style={{padding: "20%"}}>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <a href="#home-product" class="scroll-down-arrow"></a>
                </OverlayTrigger>
                
                </div>
                
                <h3>{value["title"]}</h3>
                <p style={{color:"red"}}>{value["description"]}</p>
                
            </Carousel.Caption>
        </Carousel.Item>
        )
    }
  
    return (
    <div class="carousel-container" style={{marginTop:"60px"}}>
        {/* <Carousel>
           {ListItems}
        </Carousel> */}
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row" >

<div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <div class="bg-image"></div>

    <div class="bg-text">
    <h1 >MAYONNAISE</h1>
    <p>Vitamixed Real Mayonnaise is great on salads and sandwiches. It’s rich creamy texture will enhance the
    flavor of any dish. It’s thickness and body work well on sandwiches and salads</p>
    </div>
</div>
    <div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <img style={{ width: "52vw", height: "60vh"}} src= "/static/images/shawrma2.jpg"/>
    </div>
</div>
    </div>
    <div class="carousel-item">
    <div className="row">
    <div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <img  style={{ width: "52vw", height: "60vh"}} src= "/static/images/food2.jpg"/>
    </div>
<div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <div class="bg-image"></div>

    <div class="bg-text">
    <h1>OIL</h1>
    <p>We offer a wide variety of salad oils, Soy, Corn, Canola, Peanut, Sunflower and Cottonseed Oils. All are
zero trans fat and due to our exclusive refining Process, yield excellent cooking and light frying results.</p>
    </div>
</div>
   
</div>
    </div>
    <div class="carousel-item">
    <div className="row">

<div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <div class="bg-image"></div>

    <div class="bg-text">
    <h1>OLIVE OILS</h1>
    <p>VitaMixed brand Olive Oils are available in two grades. Pomace Olive Oil and Extra Virgin Olive Oil. Both
are 100% imported high quality oils. Great for restaurant, food service, and home use .</p>
    </div>
</div>
    <div className="col" style={{paddingLeft:"0", paddingRight:"0"}}>
    <img style={{ width: "52vw", height: "60vh"}} src= "/static/images/food3.jpg"/>
    </div>
</div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
     
    );
  }
  
export default CarouselLayout;