// src/pages/article.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const { id } = useParams(); // article id from URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(
          `https://content.guardianapis.com/${id}?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&show-fields=thumbnail,trailText,byline,body`
        );
        const data = await res.json();
        setArticle(data.response.content);
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading article...</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h1>{article.webTitle}</h1>
      <p>
        {article.fields?.byline} ·{" "}
        {new Date(article.webPublicationDate).toLocaleString()}
      </p>
      {article.fields?.thumbnail && (
        <img
          src={article.fields.thumbnail}
          alt={article.webTitle}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: article.fields?.body }}
        style={{ lineHeight: "1.6" }}
      />
      <p>
        <a href={article.webUrl} target="_blank" rel="noreferrer">
          View on The Guardian
        </a>
      </p>
    </div>
  );
}
