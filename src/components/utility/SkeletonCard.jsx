export default function SkeletonCard() {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: 16,
        background: "linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%)",
        animation: "shimmer 1.8s infinite linear",
        backgroundSize: "1000px 100%",
        height: 240,
      }}
    />
  );
}
