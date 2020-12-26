import React from "react"
import { HashLink as SubLink } from 'react-router-hash-link';
import {Route, Link} from 'react-router-dom'

import { NavLink } from 'react-router-dom'


class Navbar extends React.Component{
    render(){
    const path  = this.props.path;
    const homeClass = path === "/" ? "nav-link active" : "nav-link";
    const missionClass = path==="/mission" ? "nav-link active" : "nav-link";
    const contactClass = path.indexOf("/recipes")=== -1 ? "nav-link" : "nav-link active";

    const productClass = path.indexOf("/products")=== -1 ? "nav-link" : "nav-link active";
    console.log(path);
    return(

        <div>
          <header class="desktop-header-3 light fixed-top"  >

                <div class="">

                    <nav class="navbar navbar-expand-lg navbar-dark" >
                        <a class="navbar-brand" href="/" style={{marginLeft:"10px"}}>
                        <img src="/static/images/client-7.svg" alt="VITAMIXED" /></a> 

                        <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed" data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>

                        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{height:"100%"}}>
                            <ul class="navbar-nav ml-auto scrollspy" style={{margin:"0 auto"}}>
                                
                                <li class="nav-item">
                                    <a href="/mission" class={missionClass}>MISSION</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a  href="/products" class="nav-link">PRODUCTS</a> */}
                                    <div class="dropdown">
                                        <a class={productClass} href="/products">PRODUCTS 
                                        <i class="fa fa-caret-down"></i>
                                        </a>
                                        <div class="dropdown-content">
                                        
                                       <a href="/products#section-oil">OIL</a>
                                       <a href="/products#section-vinegar">VINEGAR</a>
                                       <a href="/products#section-sauces">SAUCES</a>
                                       <a href="/products#section-mayonnaise">MAIONNAISE</a>
                                    </div>
                                </div> 
                                </li>

                                <li class="nav-item">
                                    <a  href="/recipes" class={contactClass}>RECIPES</a>
                                </li>
                               
                            </ul>
                        </div>
                    </nav>

                </div>

            </header>


           
        </div>
    );
}
}

export default Navbar;

