import React from "react";
import { useState, useEffect } from "react";
import { Ajax } from "../../helpers/Ajax";
import { Global } from "../../helpers/Global";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const { data, loading } = await Ajax(Global.url + "articles", "GET");

    if (data.status == "success") {
      setArticles(data.articles);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        "Loading... "
      ) : articles.length >= 1 ? (
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
