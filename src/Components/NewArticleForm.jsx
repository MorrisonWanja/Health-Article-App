import React from "react"
import { useMediaQuery } from 'react-responsive'


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
    
    function handleSubmit(event){
        event.preventDefault();
        fetch("https://api.jsonbin.io/v3/b/655f73f712a5d376599d8e89",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
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
}


export default NewArticleForm;