import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ajax } from "../../helpers/Ajax";
import { Global } from "../../helpers/Global";
import { List } from "./List";

export const Seeker = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [params]);

  //Revisar si es params.search el valor o no
  const getArticles = async () => {
    const { data, loading } = await Ajax(Global.url + "seeker/"+params.search, "GET");

    if (data.status == "success") {
      setArticles(data.foundArticles);
    }else{
      setArticles([]);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        "Loading..."
      ) : articles.length >= 1 ? (
        <List articles={articles} setArticles={setArticles} />
      ) : (
        <h1>No results found</h1>
      )}
    </>
  );
};
