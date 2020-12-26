import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import ItemRecipe from "../Components/ItemRecipe"
import RecipeList from "../data/recipesdb"

function Recipes() {
        return(
          <div style={{marginTop:"50px"}}>
            <div className="" style={{position:"relative"}}>
            <img style={{ width: "100%", height: "80vh"}} src= "/static/images/recepie_home.jpg"/>
            <div class="recipes_text1">
              "Enter Ingredients"
            </div>
            <div class="recipes_text2">
              "Get Your Recipes"
            </div>
            </div>
              <div style={{marginLeft:"", position:"relative"}}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" style={{fontWeight:"100", fontSize:"12px"}} >HOME</Breadcrumb.Item>
                  <Breadcrumb.Item href="/products"  style={{fontWeight:"100", fontSize:"12px"}}>PRODUCTS</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <section id="mu-about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-about-us-area">
                                <div class="mu-title">
                                    <h2 style={{color:"#583d72"}}>EXPLORE OUR RECIPES & TURN YOUR MEAL DELICIOUS</h2>        
                                    <span className="mu-title-bar"><i style={{color: "#DAA520"}} class="fa fa-spoon"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="all_recipes">
              <ItemRecipe data={RecipeList} limit={0} />
              <ItemRecipe data={RecipeList} limit={2} />
              <ItemRecipe data={RecipeList} limit={4}/>
            </div>
        
          </div>
        )
}


export default Recipes