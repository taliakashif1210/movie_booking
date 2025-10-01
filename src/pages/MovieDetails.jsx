import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import movies, { upcomingMovies } from "../data/movies";
import { FaStar } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  const movieList = type === "upcoming" ? upcomingMovies : movies;
  const movie = movieList.find((m) => m.id.toString() === id);

  if (!movie) {
    return <div className="text-center py-20 text-gray-600">Movie not found.</div>;
  }

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-2/5 h-96 object-cover"/>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-900">{movie.title}</h2>

          {/* Genre + Rating */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
            <span>{movie.genre}</span>

            {/* Show rating only if movie has rating (Now Showing) */}
            {movie.rating && (
              <span className="flex items-center gap-1 text-yellow-500">
                <FaStar /> {movie.rating}
              </span>
            )}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mt-4">
            {movie.description || "No description available for this movie."}
          </p>

          {/* Cast */}
          <div className="mt-4">
            <h3 className="text-md font-medium text-gray-800">Cast:</h3>
            <p className="text-sm text-gray-600">
              {movie.cast ? movie.cast.join(", ") : "N/A"}
            </p>
          </div>

          {/* Showtimes or Coming Soon */}
          {type === "now" ? (
            <div className="mt-4">
              <h3 className="text-md font-medium text-gray-800">Showtimes:</h3>
              <p className="text-sm text-gray-600">
                {movie.showtimes ? movie.showtimes.join(", ") : "N/A"}
              </p>
            </div>
          ) : null}

          {/* Button */}
          {type === "now" ? (
            <button
              onClick={() => navigate(`/movies/${movie.id}/booking`)}
              className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition self-start">
              Book Now
            </button>
          ) : (
            <button
              disabled
              className="mt-6 bg-gray-400 text-white py-2 px-6 rounded-lg cursor-not-allowed self-start">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
