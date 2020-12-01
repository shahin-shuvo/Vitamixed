import React  from 'react'
import Navabr from "../Components/Navbar"
import Footer from "../Components/Footer"

class Layout extends React.Component {
    render() {
        return (
            <div >
               <Navabr path = {this.props.path}/> 
               <ul id="social_side_links">
               <li ><a style={{backgroundColor: "#3c5a96" }}href="https://www.facebook.com/vitamixed" target="_blank"><img src="https://www.dropbox.com/s/xk5pdj8nks1ymdh/facebook-icon.png?raw=1" alt="" /></a></li>   
               </ul>     
                <div className="main-layout" style={{marginBottom:"5%"}}>
                    <div className="layout-background">
                        {this.props.children}
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}


export default Layout