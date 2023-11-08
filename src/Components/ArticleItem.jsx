import React from 'react'
import UpdaeArticle from './UpdateArticle'

function ArticleItem({name, id, title, description , content, image, author, deleteArticle, updateAuthor}) {
 
  
  return (
   <div>
    <div className="article" >
      <h2>{name}</h2>
      <img src={image} alt="" className="image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{content}</p>
      <h2 onClick={()=>updateAuthor(id)} >{author}</h2>
      <button onClick={()=> deleteArticle(id)} className="btn" >Delete</button>
      <UpdaeArticle />
    </div>
   </div>
  )
}
export default ArticleItem