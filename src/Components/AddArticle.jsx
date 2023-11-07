import React from "react";

function AddArticle(){

    return(
        <>
        <form >
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