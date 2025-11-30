export default function EmptyState({ title, description }) {
  return (
    <div style={{ padding: 24, textAlign: "center", opacity: 0.8 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
