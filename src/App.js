import "./App.css"
import "./navbar.css"
import "./seriesList.css"


import Navbar from "./navbar";
import { useState } from "react";
import Home from "./Home"
import MoviesList from "./moviesList";
import Footer from "./footer";
import Prnav from "./prnav"
import PrHome from "./prHome"
import About from "./about";
import Form from "./form";
import PagenotFound from "./404"
import Sidebar from "./addsid"
import Surnav from "./surnav";
import Discription from "./navee"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() 
{
   return (
     <Router>
        <div className="App">
          <Navbar/>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Router exact path="/Form">
                  <Form/>
              </Router>
              <Route exact path="/addsid">
                  <Sidebar/>
              </Route>
              <Route  path="*">
                  <PagenotFound/>
              </Route>
              
            </Switch>

          {/* {/* <MoviesList/> */}
          <Footer/>
          {/* <Surnav/> */}
          {/* <Discription/> */}
          {/* <Prnav/> */}
          {/* <PrHome/> */}
        </div>
    </Router>
)
}

export default App;
