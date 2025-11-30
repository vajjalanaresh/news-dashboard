import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function useBookmarksContext() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  // Append new bookmark
  const addBookmark = (article) => {
    setBookmarks((prev) => [...prev, article]);
  };

  // Remove bookmark by id
  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  // Check if bookmarked
  const isBookmarked = (id) => {
    return bookmarks.some((b) => b.id === id);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        count: bookmarks.length,
        addBookmark,
        removeBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
