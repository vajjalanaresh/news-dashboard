import { useMemo, useCallback, useState } from "react";
import useNewsAPI from "../hooks/useNewsAPI";
import useBookmarks from "../hooks/useBookmarks";
import SearchBar from "../components/features/SearchBar";
import FilterPanel from "../components/features/FilterPanel";
import ArticleList from "../components/content/ArticleList";
import Dashboard from "../components/charts/Dashboard";
import SkeletonCard from "../components/utility/SkeletonCard";
import EmptyState from "../components/utility/EmptyState";
import useTheme from "../hooks/useTheme";
import styles from "../styles/components/header.module.scss";

export default function Home() {
  const { theme, toggle } = useTheme("light");

  const [view, setView] = useState("grid"); // 'grid' | 'list'
  const { articles, totalResults, filters, setFilters, load, loading, error } =
    useNewsAPI({
      q: "",
      category: "",
      sources: [],
      from: "",
      to: "",
      sortBy: "newest",
      page: 1,
      pageSize: 20,
    });
  const { add, remove, isBookmarked } = useBookmarks();

  const chartData = useMemo(() => {
    const byCategory = {};
    const bySource = {};
    const byDate = {};
    for (const a of articles) {
      const cat = filters.category || "mixed";
      byCategory[cat] = (byCategory[cat] || 0) + 1;
      bySource[a.source || "Unknown"] =
        (bySource[a.source || "Unknown"] || 0) + 1;
      const day = a.publishedAt?.slice(0, 10);
      if (day) byDate[day] = (byDate[day] || 0) + 1;
    }
    return {
      category: Object.entries(byCategory).map(([name, value]) => ({
        name,
        value,
      })),
      source: Object.entries(bySource).map(([name, value]) => ({
        name,
        value,
      })),
      timeline: Object.entries(byDate)
        .sort(([d1], [d2]) => (d1 > d2 ? 1 : -1))
        .map(([date, value]) => ({ date, value })),
      stats: { total: totalResults, visible: articles.length, today: 0 }, // tweak with real 'today' calc if needed
    };
  }, [articles, filters.category, totalResults]);

  //   const handleSearch = useCallback(
  //     (q) => {
  //       load({ q, page: 1 });
  //     },
  //     [load]
  //   );

  const handleSearch = useCallback(
    (q) => {
      // console.log(q, "search---");
      const newFilters = { ...filters, q, page: 1 };
      setFilters(newFilters); // update local filters state
      load(newFilters); // fetch with updated filters
    },
    [filters, load, setFilters]
  );

  const handleFilter = useCallback(
    (f) => {
      load({ ...filters, ...f, page: 1 });
      setFilters({ ...filters, ...f, page: 1 });
    },
    [filters, load]
  );

  // console.log(filters, "filter---0");
  const handlePageChange = useCallback(
    (page) => {
      load({ page });
    },
    [load]
  );
  // console.log(filters, "articles---");

  return (
    <div className="space-y-6">
      <button
        aria-label="Toggle theme"
        onClick={toggle}
        className={styles.toggle}
        style={{
          width: "fit-content",
          background: "none",
          display: "flex",
          marginLeft: "auto",
          border: "0",
          marginTop: "9px",
        }}
      >
        <span style={{ fontSize: "2rem" }}>
          {theme === "light" ? "🌞" : "🌙"}
        </span>
      </button>
      <SearchBar defaultValue={filters.q} onSearch={handleSearch} />
      <FilterPanel filters={filters} onChange={handleFilter} />
      <Dashboard data={chartData} />

      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {Array.from({ length: filters.pageSize }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {!loading && error && <EmptyState title="Error" description={error} />}

      {!loading && !error && articles.length === 0 && (
        <EmptyState
          title="No results"
          description="Try adjusting your filters or search term."
        />
      )}

      {!loading && !error && articles.length > 0 && (
        <ArticleList
          view={view}
          onViewChange={setView}
          articles={articles}
          total={totalResults}
          page={filters.page}
          pageSize={filters.pageSize}
          onPageChange={handlePageChange}
          onBookmark={add}
          onUnbookmark={remove}
          isBookmarked={isBookmarked}
        />
      )}
    </div>
  );
}
