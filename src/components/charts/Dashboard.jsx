import CategoryChart from "./CategoryChart";
import SourceChart from "./SourceChart";
import StatsCards from "./StatsCards";
import styles from "../../styles/components/dashboard.module.scss";

export default function Dashboard({ data }) {
  const { category, source, timeline, stats } = data;
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <StatsCards stats={stats} />

      <div className={styles.chartGrid}>
        <CategoryChart data={category} />
        <SourceChart data={source} />
      </div>

      {/* Optional: Timeline line chart */}
      {/* Add LineChart with 'timeline' if desired */}
    </section>
  );
}
