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
        <select
          value={view}
          onChange={(e) => onViewChange(e.target.value)}
          className={styles.dropdown}
          aria-label="Select view"
        >
          <option value="grid">🔲 Grid View</option>
          <option value="list">📋 List View</option>
        </select>
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
