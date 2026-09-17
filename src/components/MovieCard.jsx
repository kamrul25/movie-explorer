import React from "react";

const MovieCard = ({ show, onSelect }) => {
  console.log(show);

  const { name, image, premiered, rating } = show;
  const year = premiered ? premiered : "N/A";
  const ratingVal = rating?.average ? rating.average : "N/A";
  const imageUrl = image?.medium || image?.original;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-base-200">
      <figure className="relative pt-[140%] overflow-hidden bg-base-300">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between grow">
        <div>
          <h2
            className="card-title text-base font-bold line-clamp-1"
            title={name}
          >
            {name}
          </h2>
          <div className="flex items-center gap-4 text-xs text-base-content/70 mt-2">
            <span className="font-semibold text-warning">⭐ {ratingVal} </span>
            <span>📅 {year}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => onSelect(show)}
            className="btn btn-primary btn-sm w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
