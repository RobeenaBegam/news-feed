import { useNavigate, useLocation } from "react-router-dom";

function ArticleDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const loggedIn = localStorage.getItem("loggedIn");
  const article = location.state ? location.state.article : null;

  if (!loggedIn || !article) {
    navigate("/");
    return null;
  }

  return (
    <div className="detail-page">
      <button onClick={() => navigate("/feed")}>Back</button>

      {article.urlToImage && (
        <img
          className="detail-image"
          src={article.urlToImage}
          alt={article.title}
        />
      )}

      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p className="source">Source: {article.source.name}</p>

      <a href={article.url} target="_blank" rel="noreferrer">
        Read full article
      </a>
    </div>
  );
}

export default ArticleDetail;