export default function Pagination({ total, page, pageSize, onChange }) {
  const pages = Math.ceil(total / pageSize);
  if (pages <= 1) return null;

  const go = (p) => onChange && onChange(Math.max(1, Math.min(pages, p)));

  return (
    <nav
      aria-label="Pagination"
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        margin: "24px 0",
      }}
    >
      <button onClick={() => go(page - 1)} disabled={page <= 1}>
        Prev
      </button>
      <span>
        Page {page} of {pages}
      </span>
      <button onClick={() => go(page + 1)} disabled={page >= pages}>
        Next
      </button>
    </nav>
  );
}
