import React, { useState } from 'react';
import './Style.css';

import { Link } from 'react-router-dom'
//import CommentForm from './Comments'
import Comments from './Comments'


function ArticleItem({
  name,
  id,
  title,
  description,
  content,
  image,
  author,
  deleteArticle,
  onUpdateArticle,
}) {
  const [newName, setName] = useState(name);
  const [newImage, setImage] = useState(image);
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newContent, setContent] = useState(content);
  const [newAuthor, setAuthor] = useState(author);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleUpdatedArticles(e) {
    e.preventDefault();
    let newArticle = {
      name: newName,
      image: newImage,
      title: newTitle,
      description: newDescription,
      content: newContent,
      author: newAuthor,
    };

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then((r) => r.json())
      .then((updatedArticle) => {
        onUpdateArticle(updatedArticle);
        closeModal();
        

      });
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className='articles-list'>
      <div className="article">
        <div className="title-image">
        <img src={image} alt="Image Loading..." className="image"  />
        </div>
        <div className="remaining-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{content}</p>
        <hr className="divider"></hr>
        <p>Author/s</p>
        <p>{author}</p>
        <hr className="divider"></hr>
      <div id ='edit-btn'>
      <button className= 'btn' onClick={openModal}>Edit</button>
      <button onClick={() => deleteArticle(id)} className="btns">
        Delete
      </button>
      <hr className="divider"></hr>
      </div>

      {isModalOpen && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <form id="updateItem">
              <input
                type="text"
                placeholder="New name"
                value={newName}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Add Image address here"
                value={newImage}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="text"
                placeholder="New Title"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="New Description"
                value={newDescription}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Update Content"
                value={newContent}
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                type="text"
                placeholder="New Author"
                value={newAuthor}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <button onClick={handleUpdatedArticles}>Update Article</button>
            </form>
          </div>
      
        </div>
      )}

      
      <Comments/>
      <hr className="divider"></hr>
      </div>
      
    </div>
    </div>
  );

}
export default ArticleItem;
