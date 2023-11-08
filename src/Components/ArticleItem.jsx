import React,{useState} from 'react'

function ArticleItem({name, id, title, description , content, image, author, deleteArticle, onUpdateArticle}) {
  const[newName,setName] = useState("");
  const[newImage,setImage] = useState("");
  const[newTitle,setTitle] = useState("");
  const[newDescription,setDescription] = useState("");
  const[newContent,setContent] = useState("");
  const[newAuthor,setAuthor] = useState("");

  
  function handleUpdatedArticles(e){
        e.preventDefault();
        let newArticle = {
          name:newName,
          image:newImage,
          title:newTitle,
          description:newDescription,
          content:newContent,
          author:newAuthor
        }


  fetch(`http://localhost:3000/articles/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newArticle)
        })
        .then((r) => r.json())
        .then((updatedArticle) => onUpdateArticle(updatedArticle))

      }
  
  return (
   <div>
    <div className="article" >
      <h2>{name}</h2>
      <img src={image} alt="" className="image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{content}</p>
      <p>{author}</p>
      <form >
        <input type="text" placeholder="New name"  
        value={newName} 
        onChange={(e) => setName(e.target.value)}
         />
         <input type="text" placeholder="Add Image address here"  
        value={newImage} 
        onChange={(e) => setImage(e.target.value)}
         />
         <input type="text" placeholder="New Title"  
        value={newTitle} 
        onChange={(e) => setTitle(e.target.value)}
         />
         <input type="text" placeholder="New Description"  
        value={newDescription} 
        onChange={(e) => setDescription(e.target.value)}
         />
         <input type="text" placeholder="Update Content"  
        value={newContent} 
        onChange={(e) => setContent(e.target.value)}
         />
         <input type="text" placeholder="New name"  
        value={newAuthor} 
        onChange={(e) => setAuthor(e.target.value)}
         />
         <button onClick={handleUpdatedArticles} >Update Article</button>
      </form>
      
      <button onClick={()=> deleteArticle(id)} className="btn" >Delete</button>
      
    </div>
   </div>
  )
}
export default ArticleItem