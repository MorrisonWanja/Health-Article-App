
import React,{useState} from "react";

function UpdaeArticle(){
    const[newName,setName] = useState("");
    const[newImage,setImage] = useState("");
    const[newTitle,setTitle] = useState("");
    const[newDescription,setDescription] = useState("");
    const[newContent,setContent] = useState("");
    const[newAuthor,setAuthor] = useState("");

    return(
    <div id="modal">
      <h1>Welcome Home</h1>
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
         <input type="submit" placeholder="New name"  
        value="Update Article"
         />
      </form>
    </div>

    )


}

export default UpdaeArticle;
