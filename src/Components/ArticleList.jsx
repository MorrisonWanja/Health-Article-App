import React , {useState, useEffect}from 'react';
//import ArticleItem from ;
//import NewArticleForm from ;

function ArticleList() {
  const [articles, setArticles] =useState([])
  
  const fetchedArticles = ()=>{
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then(articles => setArticles(articles))
    }
}
  