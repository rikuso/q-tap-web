import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";  // Importa el navbar
import Footer from "./components/Footer"; // Importa el Footer
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Ahora el footer está en todas las páginas */}
    </>
  );
}

export default App;