import { useState, useEffect } from "react";
import styles from "../../styles/components/header.module.scss";

const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export default function FilterPanel({ filters, onChange }) {
  const [local, setLocal] = useState(filters);

  useEffect(() => setLocal(filters), [filters]);

  const apply = () => onChange && onChange(local);
  // console.log("local filters:", local);
  return (
    <section className={styles.filters}>
      <select
        value={local.category}
        onChange={(e) => setLocal((f) => ({ ...f, category: e.target.value }))}
      >
        <option value="">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={local.sortBy}
        onChange={(e) => setLocal((f) => ({ ...f, sortBy: e.target.value }))}
      >
        <option value="newest">Sort: Newest</option>
        <option value="oldest">Sort: Oldest</option>
        <option value="relevance">Sort: Relevance</option>
      </select>

      <input
        type="date"
        value={local.from}
        onChange={(e) => setLocal((f) => ({ ...f, from: e.target.value }))}
      />
      <input
        type="date"
        value={local.to}
        onChange={(e) => setLocal((f) => ({ ...f, to: e.target.value }))}
      />

      <button onClick={apply}>Apply</button>
    </section>
  );
}
