import Sidebar from "./Sidebar";
import styles from "../../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}
