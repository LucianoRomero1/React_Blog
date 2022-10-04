import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ajax } from "../../helpers/Ajax";
import { Global } from "../../helpers/Global";
import { List } from "./List";

export const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const { data, loading } = await Ajax(
      Global.url + "article/" + params.id,
      "GET"
    );

    if (data.status == "success") {
      setArticle(data.article);
    }

    setLoading(false);
  };

  return (
    <div className="jumbo">
      {loading ? (
        "Cargando...."
      ) : (
        <>
          <div className="mask">
            {article.img != "default.png" && (
              <img src={Global.url + "image/" + article.img} />
            )}
            {article.img == "default.png" && (
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
            )}
          </div>
          <h1>{article.title}</h1>
          <span>{article.date}</span>
          <h1>{article.content}</h1>
        </>
      )}
    </div>
  );
};
