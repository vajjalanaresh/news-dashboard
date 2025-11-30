import { useEffect, useState, useCallback, useRef, useContext } from "react";
import AppConfigContext from "../components/Context/AppConfigContext";

const KEY = "news_bookmarks";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const isFirstLoad = useRef(true);
  const { setGetBookmarkcount } = useContext(AppConfigContext);

  // Load bookmarks once
  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    setBookmarks(raw ? JSON.parse(raw) : []);
  }, []);

  // Save bookmarks whenever they change, but skip first load
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem(KEY, JSON.stringify(bookmarks));
    console.log(localStorage.getItem(KEY), "bookmarks---111");
    console.log(bookmarks.length, "bookmarks1122---");
    setGetBookmarkcount(bookmarks.length);
  }, [bookmarks]);

  const add = useCallback((article) => {
    setBookmarks((prev) =>
      prev.find((a) => a.id === article.id) ? prev : [article, ...prev]
    );
  }, []);

  const remove = useCallback((id) => {
    setBookmarks((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const isBookmarked = useCallback(
    (id) => bookmarks.some((a) => a.id === id),
    [bookmarks]
  );

  return { bookmarks, add, remove, isBookmarked };
}
