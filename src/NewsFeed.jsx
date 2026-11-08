import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/");
      return;
    }

    const url =
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=" +
      import.meta.env.VITE_NEWS_API_KEY;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== "ok") {
          setError("Could not load news. Please try again later.");
        } else {
          const goodArticles = data.articles.filter(
            (a) => a.title && a.title !== "[Removed]"
          );
          setArticles(goodArticles);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load news. Check your internet connection.");
        setLoading(false);
      });
  }, [navigate]);

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/");
  }

  return (
    <div className="feed-page">
      <div className="feed-header">
        <h2>Welcome, admin</h2>
        <button onClick={logout}>Logout</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;