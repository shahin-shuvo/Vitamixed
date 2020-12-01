
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {  browserHistory } from 'react-router'

import BaseRouter from './Routes'
import './App.css';
import Layout from "./Containers/Layout"



class App extends Component {
  render(){
  return (
    <div className="App" >
       <Router>
          <Layout path={window.location.pathname}>
            <BaseRouter />
          </Layout>
        </Router>
     
    </div>
  );
}
}

export default App;