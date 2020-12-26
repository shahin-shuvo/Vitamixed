import React from 'react'
import { Route } from 'react-router-dom'

import Home from "./Containers/Home"
import Products from "./Containers/Products"
import Mission from "./Components/Mission"
import ItemDetail from "./Components/ItemDetail"
import Recipes from "./Containers/Recipes"
import RecipeDetails from "./Components/RecipeDetail"

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/products/details/:title/:itemID' component={ItemDetail} />
        <Route exact path='/recipes/details/:itemID' component={RecipeDetails} />
    </div>
);

export default BaseRouter;