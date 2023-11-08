import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
//import ArticleList from "./Components/ArticleList";
//import NavBar from "./Components/NavBar";
//import Comments from "./Components/Comments";



function App() {
    const [articles, setArticles] =useState([])
    useEffect(() => {
        fetch('ttp://localhost:3000/articles')
        .then((res) => res.json ())
        .then((data) => {
            setArticles(data);
        })
    }, []);
    const deleteArticle = (id) => {
setArticles(articles.filter((article) =>Id));


    }
  return (
    <div> 
    <Home/>
   

    </div>
    

   
  )
}

export default App;
