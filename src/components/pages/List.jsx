import React from "react";
import { Global } from "../../helpers/Global";
import { Ajax } from "../../helpers/Ajax";
import { Link } from "react-router-dom";

export const List = ({ articles, setArticles }) => {
  const deleteArticle = async (id) => {
    //Depende que API use, esto varía, pq en Symfony puse delete
    let {data} = await Ajax(Global.url + "article/"+id, "DELETE");

    if(data.status === "success"){
      //Armo un array nuevo menos el que tenga ese id que llega por parametro
      let updatedArticles = articles.filter(article => article._id != id);
      setArticles(updatedArticles);
    }
  };

  return articles.map((article) => {
    return (
      <article key={article._id} className="article-item">
        <div className="mask">
          {article.img != "default.png" && (
            <img src={Global.url + "image/" + article.img} />
          )}
          {article.img == "default.png" && (
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          )}
        </div>
        <div className="data">
          <h3 className="title"><Link to={"/article/" + article._id}>{article.title}</Link></h3>
          <p className="description">{article.content}</p>

          <button className="edit">Edit</button>
          <button
            className="delete"
            onClick={() => {
              deleteArticle(article._id);
            }}
          >
            Delete
          </button>
        </div>
      </article>
    );
  });
};
