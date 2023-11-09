import React from 'react'
import './App.css'
import './index.css'
import {Route,Routes, BrowserRouter} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleList from './Components/ArticleList'
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AddArticle from './Components/AddArticle';
//import Comments from './Components/Comments';


function App () {
    return (
            <div className="App">
                <Router>
                    <NavBar/>
                <Routes>
                <Route exact path="/" Component={Home}></Route>     
                <Route path="/articlelist" Component={ArticleList}></Route>
                <Route path="/addarticle" Component={AddArticle}></Route>
               
                </Routes>
                </Router>
            </div>
    );
}
export default App;