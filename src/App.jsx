import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieListingPage from "./pages/MovieListingPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieListingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
