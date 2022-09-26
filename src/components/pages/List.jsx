import React from "react";
import { Global } from "../../helpers/Global";

export const List = ({articles, setArticles}) => {
  return articles.map((article) => {
    return (
      <article key={article._id} className="article-item">
        <div className="mask">
          {article.img != "default.png" && <img src={Global.url + "image/" + article.img} />}
          {article.img == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />}
        </div>
        <div className="data">
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.content}</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </article>
    );
  });
};
