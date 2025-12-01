import React, { memo } from "react";
import ArticleCard from "./ArticleCard";
import Pagination from "../features/Pagination";
import styles from "../../styles/components/card.module.scss";

function ArticleListBase({
  articles,
  total,
  page,
  pageSize,
  onPageChange,
  view,
  onViewChange,
  onBookmark,
  onUnbookmark,
  isBookmarked,
}) {
  return (
    <section>
      <div className={styles.viewSwitch}>
        <button
          className={view === "grid" ? styles.active : ""}
          onClick={() => onViewChange("grid")}
          style={{
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            fontWeight: 600,
            padding: "0.5rem 1.6rem",
            border: "none",
            borderRadius: "10px", // pill shape
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            marginRight: "15px",
          }}
        >
          Grid
        </button>
        <button
          className={view === "list" ? styles.active : ""}
          onClick={() => onViewChange("list")}
          style={{
            background: "linear-gradient(135deg, #4f46e5, #6366f1)",
            color: "#fff",
            fontWeight: 600,
            padding: "0.5rem 1.6rem",
            border: "none",
            borderRadius: "10px", // pill shape
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            marginRight: "15px",
          }}
        >
          List
        </button>
      </div>

      <div className={view === "grid" ? styles.grid : styles.list}>
        {articles.map((a) => (
          <ArticleCard
            key={a.id}
            article={a}
            bookmarked={isBookmarked(a.id)}
            onBookmark={() => onBookmark(a)}
            onUnbookmark={() => onUnbookmark(a.id)}
          />
        ))}
      </div>

      <Pagination
        total={total}
        page={page}
        pageSize={pageSize}
        onChange={onPageChange}
      />
    </section>
  );
}

const ArticleList = memo(ArticleListBase);
console.log(ArticleList, "ArticleList");
export default ArticleList;
