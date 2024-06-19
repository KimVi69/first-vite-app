import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./pages/landing page/landing page";
import About from "./pages/about/about";
import Article from "./pages/article/article";
import Contact from "./pages/contact/contact";
import Timer from "./pages/exercises/timer";
import Filter from "./pages/exercises/filter";
import UseRef from "./pages/exercises/useRef";
import Register from "./pages/register/register";

const MainContent: React.FC = () => {
  const location = useLocation();
  const noHeaderPaths = ["/register"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

export default App;
