// import { Link } from "react-router-dom";
// import styles from "../../styles/components/card.module.scss";

// export default function ArticleCard({
//   article,
//   bookmarked,
//   onBookmark,
//   onUnbookmark,
// }) {
//   return (
//     <article className={styles.card}>
//       {article.image && (
//         <img
//           src={article.image}
//           alt={article.title}
//           loading="lazy"
//           className={styles.image}
//         />
//       )}
//       <div className={styles.body}>
//         <h3 className={styles.title}>
//           <Link to={`/article/${encodeURIComponent(article.id)}`}>
//             {article.title}
//           </Link>
//         </h3>
//         <p className={styles.meta}>
//           <span>{article.source || "Unknown"}</span> ·{" "}
//           <span>{new Date(article.publishedAt).toLocaleString()}</span>
//         </p>
//         <p className={styles.description}>{article.description}</p>
//         <div className={styles.actions}>
//           <a href={article.url} target="_blank" rel="noreferrer">
//             Read full
//           </a>
//           {bookmarked ? (
//             <button
//               aria-label="Remove bookmark"
//               className={styles.heart}
//               onClick={onUnbookmark}
//             >
//               ♥
//             </button>
//           ) : (
//             <button
//               aria-label="Add bookmark"
//               className={styles.heart}
//               onClick={onBookmark}
//             >
//               ♡
//             </button>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }

import { Link } from "react-router-dom";
import styles from "../../styles/components/card.module.scss";

export default function ArticleCard({
  article,
  bookmarked,
  onBookmark,
  onUnbookmark,
}) {
  return (
    <article className={styles.card}>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className={styles.image}
        />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/article/${encodeURIComponent(article.id)}`}>
            {article.title}
          </Link>
        </h3>
        <p className={styles.meta}>
          <span>{article.source || "Unknown"}</span> ·{" "}
          <span>{new Date(article.publishedAt).toLocaleString()}</span>
        </p>
        <p className={styles.description}>{article.description}</p>
        {/* <div className={styles.actions}>
          <a href={article.url} target="_blank" rel="noreferrer">
            Read full
          </a>
          {bookmarked ? (
            <button
              aria-label="Remove bookmark"
              className={styles.heart}
              onClick={onUnbookmark}
            >
              ♥
            </button>
          ) : (
            <button
              aria-label="Add bookmark"
              className={styles.heart}
              onClick={onBookmark}
            >
              ♡
            </button>
          )}
        </div> */}
        <div className={styles.actions}>
          <Link to={`/article/${encodeURIComponent(article.id)}`}>
            Read full
          </Link>
          {bookmarked ? (
            <button
              aria-label="Remove bookmark"
              className={styles.heart}
              onClick={onUnbookmark}
            >
              ♥
            </button>
          ) : (
            <button
              aria-label="Add bookmark"
              className={styles.heart}
              onClick={onBookmark}
            >
              ♡
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
