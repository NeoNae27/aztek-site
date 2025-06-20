import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import MainPage from "./pages/MainPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CertificatesPage from "./pages/CertificatesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <ScrollToTop />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="company" element={<CompanyPage />} /> 
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
