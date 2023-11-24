import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
import health from "../Images/image.jpg"

import { comment } from 'postcss';



function ArticleList() {
  const [articles, setArticles] =useState([])
  
  const fetchedArticles = ()=>{
  fetch("https://api.jsonbin.io/v3/b/655f73f712a5d376599d8e89", {
   method:"GET",
   headers: {
    "X-Master-Key" : "$2a$10$H3/1OUh9KTdhHM6XmzYrTuE6LPD3zq/R/gg4FZssG3ZUCJv.J8zc6"
   }
  })
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

 function handleUpdate(updatedArticle){

  const updatedArticles = articles.map((article) => {
     if(article.id === updatedArticle.id){
       return updatedArticle;
     }
   else {
     return article;
   }
   
   });
   setArticles(updatedArticles)
 
  }

 function updateAuthor(id){
  fetch(`http://localhost:3000/articles/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      author: "Thank you for reading my article"
    })
  })
  .then(resp => resp.json())
  .then(updatedArticle =>{
    const updatedArticles = articles.map((article)=>{
      if(article.id === updatedArticle.id) return updatedArticle
      return article
    })
    setArticles(updatedArticles)
  })
 }

  const arts= articles.map((article,index) =>
<ArticleItem key={index} name={article.name} title={article.title} image={article.image} description={article.description} content={article.content} id={article.id} author={article.author} deleteArticle={deleteArticle} onUpdateArticle={handleUpdate} updateAuthor={updateAuthor}/>
  )
  return (
    <div className="art" >
      <div className='health'>
      <h1>Green Health Articles</h1>
      <img src={health} alt="alternate-text"/>
      </div>
     
      <div>
        <div className="arts" >
        {arts}
        
        </div>
        <div>

        </div>
      </div>
         
    </div>
  );

}
export default ArticleList;