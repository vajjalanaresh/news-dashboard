import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import styles from "../../styles/components/header.module.scss";

export default function SearchBar({ defaultValue = "", onSearch }) {
  const [q, setQ] = useState(defaultValue);
  const debounced = useDebounce(q, 500);

  // console.log("search query:", debounced);

  // ✅ useEffect to trigger onSearch when debounced changes
  useEffect(() => {
    if (onSearch) {
      onSearch(debounced);
    }
  }, [debounced]);

  return (
    <div className={styles.searchBar}>
      <input
        aria-label="Search articles"
        placeholder="Search news..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
    </div>
  );
}
