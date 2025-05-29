import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import MainPage from "./pages/MainPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";


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

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        {/* TODO; replace with actual AboutPage component */}
        <Route path="about" element={<PortfolioPage />} /> 
        <Route path="services" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
