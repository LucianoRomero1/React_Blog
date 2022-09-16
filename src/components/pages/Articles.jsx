import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const url = Global.url + 'articles';
    const request = await fetch(url, {
      method: "GET",
    });

    let data = await request.json();

    if (data.status == "success") {
      setArticles(data.articles);
    }
  };

  return (
    <>
      {articles.length >= 1 ? (
        articles.map((article) => {
          return (
            <article key={article._id} className="article-item">
              <div className="mask">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
              </div>
              <div className="data">
                <h3 className="title">{article.title}</h3>
                <p className="description">{article.content}</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </article>
          );
        })
      ) : (
        <h1>Not results found</h1>
      )}
    </>
  );
};
