import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FloatingContact from "./components/FloatingContact";


export default function App() {
return (
<div className="bg-gray-950 text-gray-100 min-h-screen ">
<Navbar />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
</Routes>

   <FloatingContact />

<Footer />
</div>
);
}