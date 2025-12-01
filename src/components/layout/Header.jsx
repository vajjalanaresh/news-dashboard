import { Link, NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import styles from "../../styles/components/header.module.scss";
import { useContext } from "react";
import AppConfigContext from "../Context/AppConfigContext";

export default function Header() {
  const { theme, toggle } = useTheme("light");
  const { getBookmarkcount } = useContext(AppConfigContext);
  console.log(getBookmarkcount, "headerbookmarkcount---");
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img
          src="/applogo.png"
          alt="NewsDash Logo"
          style={{ height: "3rem" }}
        />
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/bookmarks">Bookmarks ({getBookmarkcount})</NavLink>
      </nav>
      {/* <button
        aria-label="Toggle theme"
        onClick={toggle}
        className={styles.toggle}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button> */}
      <button
        aria-label="Toggle theme"
        onClick={toggle}
        className={styles.toggle}
      >
        <span style={{ fontSize: "2rem" }}>
          {theme === "light" ? "🌞" : "🌙"}
        </span>
      </button>
    </header>
  );
}
