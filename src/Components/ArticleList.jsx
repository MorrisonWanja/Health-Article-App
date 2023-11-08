import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
import NewArticleForm from './NewArticleForm'; 


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


  return (
    <div className="art" >
      <NewArticleForm  addArticles= {addArticles}/>
      <div>
        <div className="arts" >
        {articles.map((art,index) =>(
          <ArticleItem key={index} name={art.name} image={art.image} title ={art.title} description={art.description} content={art.content} id={art.id} author={art.author} deleteArticle={deleteArticle} onUpdateArticle={handleUpdate}  />
        ))}
        
        
        </div>
      </div>
         
    </div>
  )
}
export default ArticleList
  