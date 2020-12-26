import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemRecipe = (props) => {
    const ListItems = [];
  
    for (const [index, value] of props.data[0]["itemList"].entries()) {
        if(index== props.limit || index == props.limit+1){
        ListItems.push( 
            <div className="col" style={{float: "none",margin: "0 auto"}}>
                <div className="recipe-col">
                    <Card>
                        <Card.Img className="recipe-image" src= {value["image"]} />
                        <Card.Body>
                        <div className="recipe_info">
                            <div class="mu-title">
                                <h2 style={{color:"#00303f"}}>{value["title"]}</h2>        
                            </div>
                        </div>
                        <div style={{marginLeft:"30px", marginRight:"30px"}}>
                            <div className="row">
                                <div className="col" style={{borderRight: "0.05px solid #aaaaaa"}}>
                                    <div className="prep_cook_title">PREP TIME</div>
                                    <div className="prep_cook_time">{value["prep_time"]}</div>
                                </div>
                                <div className="col" >
                                    <div className="prep_cook_title">COOK TIME</div>
                                    <div className="prep_cook_time">{value["cook_time"]}</div>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="row" style={{marginTop: "5px"}}>
                                <a className="recipe-link" href={`/recipes/details/${value["itemID"]}`}>
                                      <button class="button recipe-btn">GET RECIPE</button>
                                </a>
                        </div>
                        
                        </Card.Body>
                    </Card>
               
                </div>
                
            </div>
        )
        }
        
    }
    return(
        <div className="row">
             {ListItems}
        </div>
    )
}

export default ItemRecipe;