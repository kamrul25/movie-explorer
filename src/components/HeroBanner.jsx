import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-base-content">
            DISCOVER <span className="text-primary">MOVIES</span>
          </h1>
          <p className="py-6 text-lg text-base-content/80">
            Explore and discover your favorite movies and TV shows from around the world. Search through thousands of titles, ratings, and plot summaries in real time.
          </p>
          <Link to="/movies" className="btn btn-primary btn-lg shadow-lg">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;