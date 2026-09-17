import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Hi kamrul</p>} />
        <Route path="/about" element={<p>I am from about</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
