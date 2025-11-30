import CategoryChart from "./CategoryChart";
import SourceChart from "./SourceChart";
import StatsCards from "./StatsCards";

export default function Dashboard({ data }) {
  const { category, source, timeline, stats } = data;
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <StatsCards stats={stats} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <CategoryChart data={category} />
        <SourceChart data={source} />
      </div>
      {/* Optional: Timeline line chart */}
      {/* Add LineChart with 'timeline' if desired */}
    </section>
  );
}
