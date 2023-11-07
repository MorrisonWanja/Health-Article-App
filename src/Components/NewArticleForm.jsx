import React, {useState} from 'react';


function NewArticleForm({addArticles}) {
    const [formData, setFormData] =  useState({
        name: "", 
        author: "",
        title: "",
        description: "",
        image: "",
        content: "",    
    })
    function handleOnChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      })
    }

    function handleSubmit(event) {
      event.preventDefault()
      const post = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData),
      }
      fetch("http://localhost:3000/articles",post)
      .then(response => response.json())
      .then(data => addArticles(data))
      .catch (error => console.log (error))
    }
    let e = 400
    console.log (e)

  return (

    <form onSubmit={handleSubmit} className="article-form" >
        <input onChange={handleOnChange} type= "text" name = "name" value ={formData.name} placeholder = "name"/>
        <input onChange={handleOnChange} type = "text" name = "author" value = {formData.author} placeholder = "author"/>
        <input onChange={handleOnChange} type = "text" name = "title"value = {formData.title} placeholder = "title"/>
        <input onChange={handleOnChange} type = "text" name = "description" value = {formData.description} placeholder = "description"/>
        <input onChange={handleOnChange} type = "text" name = "image" value = {formData.image} placeholder = "image"/>
        <input onChange={handleOnChange} type = "text" name = "content"value = {formData.content} placeholder = "content"/>
        <button type= "submit" > add Article </button>
    </form>
  )
}

export default NewArticleForm;