import React,{useState,useEffect} from "react";
import "./../App.css"
import "./Style.css";

function AddArticle(){
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")

 
  function handleSubmit(e){
    e.preventDefault();
    const article = {
      name:name,
      title:title,
      image:image,
      description:description,
      content:content,
      author:author,
    };
    console.log(article)
    fetch("http://localhost:3000/articles", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(article),
    })
   
    .then((res) => res.json())
    .then((articles) =>  console.log(articles)
    )


  }

  



    return(
        <>
        <form className="new-article" onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="name" placeholder="Name of your article" 
        value={name}
        onChange={(e) => setName(e.target.value)} autoComplete="off"/>
        <input type="text" name="title" placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} autoComplete="off"/>
         <input name="image" placeholder="AddImage link here" 
         value={image}
         onChange={(e) => setImage(e.target.value)} autoComplete="off"/>
         <input type="text" name="description" placeholder="Description" 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         autoComplete="off"/>
         <input type="text" name="content" placeholder="Content"
         value={content}
         onChange={(e) => setContent(e.target.value)} autoComplete="off" />
         <input type="text" name="author" placeholder="Author" 
         value={author}
         onChange={(e) => setAuthor(e.target.value)} autoComplete="off" />
         <input type="submit" value="Add Article" />
        </form>
        <p>Welcome to my section</p>
        </>
    )
}

export default AddArticle;