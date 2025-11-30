import { useEffect, useState, useCallback } from "react";
import { fetchArticles } from "../utils/api";

export default function useNewsAPI(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);
  const [data, setData] = useState({ articles: [], totalResults: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(
    async (overrides = {}) => {
      setLoading(true);
      setError(null);
      // console.log(filters, "filters---");
      try {
        const merged = { ...filters, ...overrides };
        const resp = await fetchArticles(merged);
        setData(resp);
        setFilters(merged);
      } catch (e) {
        setError(e.message || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    },
    [filters]
  );

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...data, filters, setFilters, load, loading, error };
}
