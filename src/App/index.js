import React from "react";

import {Switch, Route} from "react-router-dom";

import Header from "./Header";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Random from "../pages/Random";
import Select from "../pages/Select";
import Footer from "./Footer";
import "./index.css" 

function App(props){

    return (
        <div>
        
            <NavBar />   
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/random" component={Random} />
                <Route path="/select" component={Select} />
            </Switch>
            <Footer />
           
            
            
        </div>
    )
}

export default App;