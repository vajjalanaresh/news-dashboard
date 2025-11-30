import useBookmarks from "../hooks/useBookmarks";
import { exportCSV } from "../utils/csv";
import ArticleCard from "../components/content/ArticleCard";
import styles from "../styles/components/card.module.scss";

export default function Bookmarks() {
  const { bookmarks, remove, isBookmarked } = useBookmarks();
  console.log(bookmarks.length, "bookmarks11---");
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h2>Bookmarks</h2>
        <button
          onClick={() => exportCSV(bookmarks, "bookmarks.csv")}
          style={{
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            fontWeight: 600,
            padding: "0.5rem 1.6rem",
            border: "none",
            borderRadius: "50px", // pill shape
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.25)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
        >
          Export Bookmarks
        </button>
      </div>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className={styles.grid}>
          {bookmarks.map((a) => (
            <ArticleCard
              key={a.id}
              article={a}
              bookmarked={isBookmarked(a.id)}
              onBookmark={() => {}}
              onUnbookmark={() => remove(a.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
