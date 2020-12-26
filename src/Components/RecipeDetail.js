import React from 'react'
import RecipeDB from "../data/recipesdb"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Badge from 'react-bootstrap/Badge'

class RecipeDetail extends React.Component {
    render(){
    const itemID = this.props.match.params.itemID;
    let recipe = getRecipeInfo(itemID);
    
    return(
        <div>
        <div style={{marginTop:"50px"}}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" style={{fontWeight:"100", fontSize:"12px"}} >HOME</Breadcrumb.Item>
                  <Breadcrumb.Item href="/products"  style={{fontWeight:"100", fontSize:"12px"}}>PRODUCTS</Breadcrumb.Item>
                  <Breadcrumb.Item href="/recipes"  style={{fontWeight:"100", fontSize:"12px"}}>RECIPES</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        <div className="div container" >
            <div className="col" style={{float: "none",margin: "0 auto"}}>
                <div className="recipe-col">
                <div className="recipe_info">
                        <div class="mu-title">
                            <h3 style={{color:"#00303f"}}className="itemName">
                                <span>{recipe["title"]}</span>
                            </h3>    
                        </div>
                </div>
                    <div>
                        <img className="recipe-detail-image" src= {recipe["image"]} />
                        
                        <div className="recipe_info">
                            <div class="mu-title">
                                <h2 style={{color:"#00303f"}}>{}</h2>        
                            </div>
                        </div>
                        <div style={{marginLeft:"30px", marginRight:"30px"}}>
                            <div className="row" >
                                <div className="col" style={{borderRight: "0.05px solid #aaaaaa"}}>
                                    <div className="prep_cook_title">PREP TIME</div>
                                    <div className="prep_cook_time">{recipe["prep_time"]}</div>
                                </div>
                                <div className="col"  style={{borderRight: "0.05px solid #aaaaaa"}}>
                                    <div className="prep_cook_title">COOK TIME</div>
                                    <div className="prep_cook_time">{recipe["cook_time"]}</div>
                                </div>
                                <div className="col"  >
                                    <div className="prep_cook_title">SERVINGS</div>
                                    <div className="prep_cook_time">{recipe["servings"]}</div>
                                </div>
                            </div>
                        </div>
                       
                       
                        
                        
                    </div>
               
                </div>
            </div>
            <div className="row">
                <div class="col card" style={{marginRight:"10px"}}>
                    <div class="card-header recipe-header-title">
                        INGREDIENTS
                    </div>
                    <div class="card-body">
                        <ul className="ingredients_bullet" >
                            {recipe["ingredients"].map((item) =>
                                <li style={{color:"#213e3b"}}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <div class="col card" style={{marginLeft:"10px"}}>
                    <div class="card-header recipe-header-title">
                        INSTRUCTIONS
                    </div>
                    <div class="card-body">
                    <ul className="ingredients_bullet" >
                            {recipe["recipe_des"].map((item) =>
                                <li style={{color:"#213e3b"}}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tags">
            <Badge variant="dark" style={{marginRight:"5px"}}>TAGS#</Badge>
            {recipe["tags"].map((item) =>
                <Badge style={{marginRight:"5px", textTransform: "uppercase"}} variant="secondary">{item}</Badge>
            )}
            </div>
        </div>
        </div>
    )
}
}
function getRecipeInfo(itemID){
    let dataDict = RecipeDB;
    for (const [index, value] of dataDict[0]["itemList"].entries()) {
        if(value["itemID"]== itemID){
            return value;
        }
    }
}


export default RecipeDetail;