import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/utility/Loader";
import ErrorBoundary from "./components/utility/ErrorBoundary";
import AppConfigContext from "./components/Context/AppConfigContext";

const Home = lazy(() => import("./pages/Home"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Article = lazy(() => import("./pages/Article"));

export default function App() {
  const [getBookmarkcount, setGetBookmarkcount] = useState(0);
  return (
    <AppConfigContext.Provider
      value={{
        setGetBookmarkcount,
        getBookmarkcount,
      }}
    >
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/article/:id" element={<Article />} />
              </Routes>
            </Suspense>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </AppConfigContext.Provider>
  );
}
