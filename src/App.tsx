import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing page/landing page";
import About from "./pages/about/about";
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
