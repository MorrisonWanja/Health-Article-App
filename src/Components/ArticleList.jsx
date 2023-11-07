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
    useEffect(() =>{
        fetchedArticles()
    },[])
    
    function addArticles (newArticles) {
        setArticles ([...articles, newArticles]) 
      }

      function deleteArticle(id){
        fetch(`http://localhost:3000/articles/${id}`,{
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() =>{
          const updatedArticles= articles.filter((article)=> article.id !== id)
          setArticles(updatedArticles)
        })
       }
    
}
  