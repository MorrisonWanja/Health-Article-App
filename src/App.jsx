import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import ArticleList from "./ArticleList"
import NavBar from "./Navbar"
import Comments from "./Comments"


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/articlelist">
        <ArticleList />
        </Route>
        <Route  path ="/comments">
        <Comments/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
