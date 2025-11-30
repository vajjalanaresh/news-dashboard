export default function StatsCards({ stats }) {
  const { total, visible, today } = stats;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
      }}
    >
      <div className="stat-card">
        <h4>Total</h4>
        <p>{total}</p>
      </div>
      <div className="stat-card">
        <h4>Visible</h4>
        <p>{visible}</p>
      </div>
      <div className="stat-card">
        <h4>Today</h4>
        <p>{today}</p>
      </div>
    </div>
  );
}
