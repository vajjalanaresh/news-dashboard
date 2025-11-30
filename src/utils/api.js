// Guardian API integration
const BASE_URL = "https://content.guardianapis.com";

export async function fetchArticles({
  q,
  category, // Guardian uses 'section' instead of 'category'
  from,
  to,
  sortBy, // Guardian supports 'newest', 'oldest', 'relevance'
  page = 1,
  pageSize = 20,
}) {
  const params = new URLSearchParams({
    "api-key": process.env.REACT_APP_GUARDIAN_API_KEY,
    page,
    "page-size": pageSize,
    "order-by": sortBy,
    "show-fields": "thumbnail,trailText,byline,body",
    section: category || "world",
  });

  if (q) params.set("q", q);
  if (category) params.set("section", category);
  if (from) params.set("from-date", from); // must be YYYY-MM-DD or ISO8601
  if (to) params.set("to-date", to);

  // console.log(category, params.toString(), "Guardian API request");
  const url = `${BASE_URL}/search?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Guardian API error: ${res.status}`);
  const data = await res.json();

  return {
    articles: (data.response.results || []).map((a) => ({
      id: a.id,
      title: a.webTitle,
      description: a.fields?.trailText,
      url: a.webUrl,
      image: a.fields?.thumbnail,
      source: "The Guardian",
      publishedAt: a.webPublicationDate,
      author: a.fields?.byline,
      content: a.fields?.body,
    })),
    totalResults: data.response.total || 0,
  };
}
