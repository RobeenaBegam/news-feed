import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import NewsFeed from "./NewsFeed";
import ArticleDetail from "./ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<NewsFeed />} />
        <Route path="/article" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;