import styles from "../../styles/components/filters.module.scss";

export default function Filters({ selected, onSelect }) {
  const categories = [
    "All",
    "Politics",
    "Business",
    "Technology",
    "Science",
    "Sports",
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selected === cat ? styles.active : ""}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.sort}>
        <select>
          <option>Date</option>
          <option>Source</option>
        </select>
      </div>
    </div>
  );
}
