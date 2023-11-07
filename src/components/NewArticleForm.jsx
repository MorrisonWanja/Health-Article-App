import React, { useState, useEffect } from "react";

//function to collect data through a form and add it to our DB
function NewArticleForm(){
    const [formData, setFormData] = useState({
        name:"",
        author:"",
        title:"",
        description:"",
        image:"",
        content:"",
    });

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }
}

return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="name"/>
        <input type="text" id="author" value={formData.author} onChange={handleChange} placeholder="author"/>
        <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="title"/>
        <input type="text" id="description" value={formData.description} onChange={handleChange} placeholder="description"/>
        <input type="text" id="image" value={formData.image} onChange={handleChange} placeholder="image"/>
        <input type="text" id="content" value={formData.content} onChange={handleChange} placeholder="content"/>
    </form>
)

function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3000/articles",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export default NewArticleForm;