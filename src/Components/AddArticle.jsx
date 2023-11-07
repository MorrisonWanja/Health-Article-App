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
    if(name<1, title<1, image<1, description<1,content<1,author<1){
      alert("You cannot submit an empty article. Please ensure that you populate all the fields")
    }
    const article = {
      name:name,
      title:title,
      image:image,
      description:description,
      content:content,
      author:author,
    };
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
        <div className="add-new-article">
        <h1>Thank you for visiting Our Article App. 
          You can contribute to our research body by submitting your 
          articel using the form below.</h1>
        <form className="new-article" onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="name" placeholder="Name of your article" 
        value={name}
        onChange={(e) => setName(e.target.value)} autoComplete="off" required/>
        <input type="text" name="title" placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} autoComplete="off" required/>
         <input name="image" placeholder="AddImage link here" 
         value={image}
         onChange={(e) => setImage(e.target.value)} autoComplete="off" required/>
         <input type="text" name="description" placeholder="Description" 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         autoComplete="off" required/>
         <textarea type="text"className="content-input-area" rows="13" name="content" placeholder="Content"
         value={content}
         onChange={(e) => setContent(e.target.value)} autoComplete="off" required />
         <input type="text" name="author" placeholder="Author" 
         value={author}
         onChange={(e) => setAuthor(e.target.value)} autoComplete="off" required />
         <input type="submit" value="Add Article" />
         <p>Thank you for your contribution</p>
        </form>
        
        </div>
        </>
    )
}

export default AddArticle;