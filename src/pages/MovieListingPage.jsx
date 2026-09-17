import React, { useEffect, useState } from "react";
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import { allShows, searchShows } from "../services/tvmazeApi";

const MovieListingPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      const loadShows = async () => {
        setLoading(true);
        const data = await allShows();
        setShows(data);
        setLoading(false);
      };
      loadShows();

      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      const results = await searchShows(searchTerm);
      setShows(results);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8 grow">
      <h1 className="text-3xl font-bold text-center mb-2">
        Explore Movies & Shows
      </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <div className="flex justify-center items-center min-h-75">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : shows.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-base-content/60">
            No shows found matching "{searchTerm}".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              show={show}
              onSelect={(selected) => setSelectedShow(selected)}
            />
          ))}
        </div>
      )}

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
};

export default MovieListingPage;