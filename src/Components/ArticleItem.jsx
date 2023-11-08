import React from 'react'

import { Link } from 'react-router-dom'
//import CommentForm from './Comments'
import Comments from './Comments'


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
      <div>
      
      <Comments/>
      <button onClick={()=> deleteArticle(id)} className="btn" >Delete</button>
      </div>
      </div>
      
    </div>
    
  )
}
export default ArticleItem