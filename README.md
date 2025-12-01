# 📰 News Dashboard

An interactive **React-based news dashboard** that fetches articles from APIs, supports bookmarking, CSV export, and visual insights with charts. Designed to be responsive, modern, and interview‑ready.

---

## 🚀 Features

- **Dynamic News Feed** – Fetches articles from APIs (NewsAPI, Guardian, etc.)
- **Bookmark System** – Add/remove bookmarks with live count via Context
- **CSV Export** – Export bookmarks to a clean CSV file
- **Responsive UI** – Modern layout with SCSS, Flowbite, and react-icons
- **Theme Toggle** – Switch between light 🌞 and dark 🌙 modes
- **Charts & Insights** – Category distribution with Recharts (Bar, Pie, Line)
- **LocalStorage Persistence** – Bookmarks survive page refresh

---

## 📂 Project Structure

src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Layout.jsx
 │    ├── ArticleCard.jsx
 │    └── charts/
 │         └── CategoryChart.jsx
 │
 ├── context/
 │    └── BookmarkContext.jsx
 │
 ├── hooks/
 │    ├── useBookmarks.js
 │    └── useTheme.js
 │
 ├── styles/
 │    └── components/
 │         ├── header.module.scss
 │         └── layout.module.scss
 │
 └── App.jsx

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/news-dashboard.git

# Navigate into project
cd news-dashboard

# Install dependencies
npm install

# Start development server
npm run dev



**Usage**
Home Page → Browse latest articles

Bookmarks Page → View saved articles with live count

Export Button → Download bookmarks as CSV

Charts → Visualize categories and stats

Theme Toggle → Switch between light/dark mode

**Tech Stack**
React (hooks, context API)

SCSS (responsive styling)

Flowbite + react-icons (UI polish)

Recharts (data visualization)

LocalStorage (bookmark persistence)