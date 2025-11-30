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
        >
          Grid
        </button>
        <button
          className={view === "list" ? styles.active : ""}
          onClick={() => onViewChange("list")}
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
