import React from "react"

import VinegarList from "../data/vinegar"
import SaucesList from "../data/sauces"
import OilList from "../data/oil"
import MayonnaiseList from "../data/mayonnaise"

import NavTabs from "./Tabs"
import vinegarList from "../data/vinegar"
import saucesList from "../data/sauces"

class DetailContainer extends React.Component {
    render(){
        
        const title = this.props.match.params.title;
        const itemID = this.props.match.params.itemID;
        let dataDict = extractItemData(title, itemID);
        console.log(dataDict)
        return(
            <div className="container" style={{marginTop:"6%"}}>
                <h3 className="itemName"><span>{dataDict["title"]}</span></h3>
                <div class="row">
                    <div class="col-md-6">
                        <img src={dataDict["image"]} alt="plus icon img"/>
                    </div>
                    <div class="col-md-6">
                       <NavTabs data = {dataDict}/>
                    </div>

                </div>
            </div>
        )
    }
}

function extractItemData(title, itemID){
    let dataDict = [];
    if(title == "mayonnaise"){
        dataDict = MayonnaiseList;
    }
    else if (title == "oil") dataDict = OilList;
    else if(title == "vinegar") dataDict = vinegarList;
    else if (title=="sauces") dataDict = saucesList;
    for (const [index, value] of dataDict[0]["itemList"].entries()) {
        if(value["itemID"]== itemID){
            return value;
        }
    }
}

export default DetailContainer;