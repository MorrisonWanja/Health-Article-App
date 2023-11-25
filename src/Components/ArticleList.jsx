import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import ArticleItem from './ArticleItem';
import health from "../Images/image.jpg";


function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = () => {
    fetch("https://api.jsonbin.io/v3/b/655f73f712a5d376599d8e89", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2a$10$H3/1OUh9KTdhHM6XmzYrTuE6LPD3zq/R/gg4FZssG3ZUCJv.J8zc6"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const articlesArray = data.record.articles;
        setArticles(articlesArray);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const addArticle = (newArticle) => {
    setArticles(prevArticles => [...prevArticles, newArticle]);
  };

  const deleteArticle = (id) => {
    fetch(`https://api.jsonbin.io/v3/b/655f73f712a5d376599d8e89${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        const updatedArticles = articles.filter(article => article.id !== id);
        setArticles(updatedArticles);
      })
      .catch(error => {
        console.error('Error deleting article:', error);
      });
  };

  const handleUpdate = (updatedArticle) => {
    const updatedArticles = articles.map(article =>
      article.id === updatedArticle.id ? updatedArticle : article
    );
    setArticles(updatedArticles);
    // Send a request to the server to persist the changes if needed
  };

  const arts = articles.map(article => (
    <ArticleItem
      key={article.id}
      name={article.name}
      title={article.title}
      image={article.image}
      description={article.description}
      content={article.content}
      id={article.id}
      author={article.author}
      deleteArticle={deleteArticle}
      onUpdateArticle={handleUpdate}
    />
  ));

  return (
    <div className="art">
      <div className='health'>
        <h1>Green Health Articles</h1>
        <img src={health} alt="Green Health" />
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="arts">{arts}</div>
        )}
      </div>
    </div>
  );
}

export default ArticleList;
