import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Breadcrumb from 'react-bootstrap/Breadcrumb'



function Mission() {
        return(
          <div style={{marginTop:"50px"}}>
            <div className="" style={{position:"relative"}}>
            <img style={{ width: "100%", height: "60vh"}} src= "/static/images/mission back.png"/>
            <div class="centered-text">
              "Pleasure – that is what is sought in every bite."
            </div>
            </div>
              <div style={{marginLeft:"", position:"relative"}}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" style={{fontWeight:"100", fontSize:"12px"}} >HOME</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{fontWeight:"100", fontSize:"12px"}}>OUR MISSION</Breadcrumb.Item>
                </Breadcrumb>
              </div>
        
            <div style={{marginTop:"0%",}}>
              <section id="mu-about-us">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mu-about-us-area">
                      <div class="mu-title">
                        {/* <span class="mu-subtitle">Discover</span> */}
                        <h2>OUR MISSION</h2>        
                        <span className="mu-title-bar"><i style={{color: "#DAA520"}} class="fa fa-spoon"></i></span>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="mu-about-us-left">
                          <div className="mission-title">
                          Our mission is to provide HALAL food
                          </div>
                          
                          <p style={{textAlign:"justify", color:"black"}}>
                          
                            <br></br> <br></br>
                            VitaMixed Mix the fine * ingredients for nice texture , flavor and real taste in your daily ( everyday )
life.
VITAMIXED – stand for quality ingredients and authentic flavor to bring nutrient enriched, holistic real
food in your daily life for healthy, delicious meals and Snacks.

                          </p>    
                                                  
                          
                          </div>
                        </div>
                     
                            
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        )
}


export default Mission