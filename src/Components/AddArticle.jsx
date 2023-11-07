import React,{useState,useEffect} from "react";
import "./../App.css"
import "./Style.css";

function AddArticle(){
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")

 
  function handleSubmit(e){
    e.preventDefault();
    const article = {
      name:name,
      title:title,
      description:description,
      content:content,
      author:author
    }
    fetch("http://localhost:3000/articles", {
      method:"POST",
      headers: {
        "Content-Type":"application.json"
      },
      body:JSON.stringify(article),
    })
   
    .then((res) => res.json())
    .then((articles) => {
      console.log(articles)
    })


  }

  



    return(
        <>
        <form className="new-article" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name of your article" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="title" placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
         <img src="" name="image" alt="AddImage link here" 
         value={image}
         onChange={(e) => setImage(e.target.value)}/>
         <input type="text" name="description" placeholder="Description" 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         />
         <input type="text" placeholder="Content" />
         <input type="text" placeholder="Author" />
         <input type="submit" value="Add Article" />
        </form>
        <p>Welcome to my section</p>
        </>
    )
}

export default AddArticle;