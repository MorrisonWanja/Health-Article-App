import React from 'react'
import './App.css'

import ArticleList from './Components/ArticleList'
import AddArticle from './Components/AddArticle';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App () {
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
                {/* <Route  path ="/comments">
                <Comments/>
                </Route> */}
              </Switch>
            </div>
    );
}
export default App;
