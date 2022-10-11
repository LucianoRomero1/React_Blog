import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ajax } from "../../helpers/Ajax";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";

export const EditArticle = () => {
  const { form, sended, changed } = useForm({});
  const [result, setResult] = useState("unsended");
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const { data } = await Ajax(Global.url + "article/" + params.id, "GET");

    if (data.status == "success") {
      setArticle(data.article);
    }
  };

  const editArticle = async (e) => {
    e.preventDefault();
    let newArticle = form;

    const { data } = await Ajax(
      Global.url + "article/" + params.id,
      "PUT",
      newArticle
    );

    if (data.status === "success") {
      setResult("saved");
    } else {
      setResult("error");
    }

    const fileInput = document.querySelector("#file");

    if (data.status === "success" && fileInput.files[0]) {
      setResult("saved");

      const formData = new FormData();
      formData.append("file", fileInput.files[0]);

      //El ultimo true es para avisarle a la funcion esa, que envio un archivo
      const upload = await Ajax(
        Global.url + "upload-file/" + data.article._id,
        "POST",
        formData,
        true
      );

      if (upload.data.status === "success") {
        setResult("saved");
      } else {
        setResult("error");
      }
    }
  };

  return (
    <div className="jumbo">
      <h1>Edit article</h1>
      <strong>
        {result == "saved" ? "Article has been edited successfully" : ""}
      </strong>
      <strong>{result == "error" ? "Params not found" : ""}</strong>

      <form className="form" onSubmit={editArticle}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={changed}
            defaultValue={article.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea name="content" onChange={changed} defaultValue={article.content} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <div className="mask">
            {article.img == "default.png" && (
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
            )}
            {article.img != "default.png" && (
              <img src={Global.url + "image/" + article.img} />
            )}
          </div>
          <input type="file" name="image" id="file" />
        </div>

        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
};
