import React from 'react'
import { Route } from 'react-router-dom'

import Home from "./Containers/Home"
import Products from "./Containers/Products"
import Mission from "./Components/Mission"
import ItemDetail from "./Components/ItemDetail"

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/details/:title/:itemID' component={ItemDetail} />
    </div>
);

export default BaseRouter;