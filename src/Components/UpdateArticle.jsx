
import React,{useState} from "react";

function UpdaeArticle(updateAuthor,id){
    const[newName,setName] = useState("");
    const[newImage,setImage] = useState("");
    const[newTitle,setTitle] = useState("");
    const[newDescription,setDescription] = useState("");
    const[newContent,setContent] = useState("");
    const[newAuthor,setAuthor] = useState("");


    function handleUpdate(e){
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
        .then(res => res.json())
        .then(updatedArtice => {
          let updateArticles = articles.map(art => {
            if(article.id === id){
                art.name = newName,
                art.image =newImage,
                art.title = newTitle,
                art.description = newDescription,
                art.content = newContent,
                art.author = newAuthor
            }
            return art
          })
            
        })
      }
      

    return(
    <div id="modal">
      <div>
      <form onSubmit={handleUpdate}>
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
         <button>Update Article</button>
      </form>
      </div>
    </div>

    )


}

export default UpdaeArticle;
