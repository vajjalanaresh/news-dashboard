import Header from "./Header";
import styles from "../../styles/components/layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
