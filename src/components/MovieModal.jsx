import React, { useEffect } from "react";

const MovieModal = ({ show, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  const { name, image, summary, rating, premiered, genres, language } = show;
  const year = premiered ? premiered : "N/A";
  const ratingVal = rating?.average ? rating.average : "N/A";
  const imageUrl = image?.original || image?.medium;

  const cleanSummary = summary
    ? summary.replace(/<[^>]*>?/gm, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-base-100 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-base-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn btn-circle btn-sm btn-ghost absolute right-3 top-3 z-10 bg-base-100/60 hover:bg-base-200"
        >
          ✕
        </button>

        <div className="relative h-64 sm:h-80 w-full bg-base-300">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-4 text-base-content/80">
            <span className="font-bold text-warning bg-warning/10 px-2.5 py-1 rounded-md">
              ⭐ Rating: {ratingVal}
            </span>
            <span className="bg-base-200 px-2.5 py-1 rounded-md">
              📅 Release: {year}
            </span>
            {language && (
              <span className="bg-base-200 px-2.5 py-1 rounded-md">
                🌐 {language}
              </span>
            )}
          </div>

          {genres && genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {genres.map((genre) => (
                <span key={genre} className="badge badge-outline badge-primary">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="divider my-2"></div>

          <h3 className="font-semibold text-lg mb-2">Overview</h3>
          <p className="text-base-content/80 leading-relaxed text-sm sm:text-base">
            {cleanSummary}
          </p>

          <div className="modal-action mt-6">
            <button onClick={onClose} className="btn btn-neutral">
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
