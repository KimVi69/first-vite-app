import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./pages/landing page/landing page";
import About from "./pages/about/about";
import Article from "./pages/article/article";
import Contact from "./pages/contact/contact";
import Timer from "./pages/timer";
import Filter from "./pages/filter";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
