import { useNavigate } from "react-router-dom";

function NewsCard({ article }) {
  const navigate = useNavigate();

  function openArticle() {
    navigate("/article", { state: { article } });
  }

  return (
    <div className="news-card" onClick={openArticle}>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} />
      ) : (
        <div className="no-image">No image</div>
      )}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="source">{article.source.name}</span>
    </div>
  );
}

export default NewsCard;