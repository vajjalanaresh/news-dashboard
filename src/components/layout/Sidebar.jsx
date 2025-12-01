import { useContext, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaNewspaper,
  FaChartBar,
  FaBookmark,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "../../styles/components/sidebar.module.scss";
import AppConfigContext from "../Context/AppConfigContext";
import useTheme from "../../hooks/useTheme";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { getBookmarkcount } = useContext(AppConfigContext);
  const count = getBookmarkcount;
  const { theme, toggle } = useTheme("light");
  return (
    <>
      {/* Hamburger toggle (visible on mobile) */}
      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
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
      <div className={styles.logoalign}>
        <h2 className={styles.logo}>NewsDash</h2>
      </div>

      {/* Sidebar menu */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <h2 className={styles.logo}>NewsDash</h2>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <FaNewspaper /> News Feed
          </NavLink>

          {/* <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <FaChartBar /> Analytics
          </NavLink> */}

          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <FaBookmark /> Bookmarks{" "}
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
