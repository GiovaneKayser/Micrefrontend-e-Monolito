import React from "react";

export default function Appreciation(article) {
  function handleArticle(article) {
    dispatchEvent(new CustomEvent('@Giovane/appreciation/todo/setArticle', { detail: article }))
  }
  return (
    <>
      <div className="appreciation" >
        <img src={article.article.img} height={48} width={48} />
        <br />
        <span>{article.article.title}</span><br/>
        <button onClick={() => handleArticle(article)}>Ler mais</button>
      </div>
    </>
  );
}
