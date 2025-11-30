export function exportCSV(rows, filename) {
  if (!rows?.length) return;
  const headers = [
    "id",
    "title",
    "description",
    "url",
    "image",
    "source",
    "publishedAt",
    "author",
    "content",
  ];

  const stripHTML = (v) => String(v ?? "").replace(/<[^>]+>/g, "");
  const escape = (v) => `"${stripHTML(v).replace(/"/g, '""')}"`;

  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => escape(r[h])).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
