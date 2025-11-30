// import { useEffect, useState } from "react";

// const KEY = "theme";

// export default function useTheme(defaultTheme = "light") {
//   const [theme, setTheme] = useState(defaultTheme);

//   useEffect(() => {
//     const saved = localStorage.getItem(KEY);
//     setTheme(saved || defaultTheme);
//   }, [defaultTheme]);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem(KEY, theme);
//   }, [theme]);

//   const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
//   return { theme, toggle };
// }

import { useEffect, useState } from "react";

const KEY = "news_theme";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggle };
}
