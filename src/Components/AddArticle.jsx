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
    console.log("name",name)

  }



    return(
        <>
        <form className="new-article" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name of your article" />
        <input type="text" placeholder="Title" />
         <img src="" alt="AddImage link here" />
         <input type="text" placeholder="Description" />
         <input type="text" placeholder="Content" />
         <input type="text" placeholder="Author" />
         <input type="submit" value="Add Article" />
        </form>
        <p>Welcome to my section</p>
        </>
    )
}

export default AddArticle;