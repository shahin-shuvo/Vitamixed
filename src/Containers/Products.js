import React from "react"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import VinegarList from "../data/vinegar"
import SaucesList from "../data/sauces"
import OilList from "../data/oil"
import MayonnaiseList from "../data/mayonnaise"
import CardList from "../Components/CardItem"

class ProductPage extends React.Component {
    
    render(){
        return(
            <div style={{marginTop:"50px"}}>
            <div style={{ position:"relative"}}>
                <Breadcrumb >
                  <Breadcrumb.Item href="/" style={{fontWeight:"100", fontSize:"12px"}}>HOME</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{fontWeight:"100", fontSize:"12px"}}>PRODUCTS</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            
            <div className="container ">

                <section id="section-vinegar" style={{padding:""}}>
                <div className="product-row" >
                    <div class="product-title">
                            <h2>OUR FEATURED VINEGAR</h2>        
                            <span className="product-title-bar"><i class="fa fa-spoon"></i></span>
                    </div>
                    <div className="vinegar-row">
                        <CardList data={VinegarList} />
                    </div>
                </div>
                </section>  

                <section id="section-oil" style={{padding:"1%"}}>
                <div className="product-row">
                    <div class="product-title">
                            <h2>OUR FEATURED OIL</h2>        
                            <span className="product-title-bar"><i class="fa fa-spoon"></i></span>
                    </div>
                    <div className="oil-row">
                        <CardList data={OilList} />
                    </div>
                </div>     
                </section>

                <section id="section-sauces" style={{padding:"1%"}}>
                <div className="product-row">
                    <div class="product-title">
                            <h2>OUR FEATURED SAUCES</h2>        
                            <span className="product-title-bar"><i class="fa fa-spoon"></i></span>
                    </div>
                    <div className="sauces-row">
                        <CardList data={SaucesList} />
                    </div>
                </div> 
                </section>

                <section id="section-mayonnaise" style={{padding:"1%"}}>
                <div className="product-row">
                    <div class="product-title">
                            <h2>OUR FEATURED MAYONNAISE</h2>        
                            <span className="product-title-bar"><i class="fa fa-spoon"></i></span>
                    </div>
                    <div className="mayonnaise-row">
                        <CardList data={MayonnaiseList} />
                    </div>
                </div>
                </section>
            </div>
        </div>
        )
    }
}

export default ProductPage;