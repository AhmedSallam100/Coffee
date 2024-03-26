import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import CafeDetails from "./pages/cafe-details/CafeDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cafes/:name" element={<CafeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
