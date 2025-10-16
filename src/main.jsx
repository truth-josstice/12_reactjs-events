import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { AboutPage } from "./pages/AboutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ArticlePage } from "./pages/ArticlePage.jsx";
import { WatchPage } from "./pages/WatchPage.jsx";
import { ArticleByID } from "./components/ArticleByID.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/pokemon-search" element={<App />} />
        <Route path ="/articles" element={<ArticlePage />}>
          <Route path="/articles/:id" element={<ArticleByID />} />
        </Route>
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
