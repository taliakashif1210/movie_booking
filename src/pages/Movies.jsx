import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../data/movies";
import { FaStar } from "react-icons/fa";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const navigate = useNavigate();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = genreFilter ? movie.genre === genreFilter : true;

    const matchesLanguage = languageFilter
      ? (movie.language || "English") === languageFilter
      : true;

    const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;

    return matchesSearch && matchesGenre && matchesLanguage && matchesRating;
  });

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Movies</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Genre Filter */}
          <select
            className="px-4 py-2 rounded-lg border border-gray-300"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}>
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Adventure">Adventure</option>
            <option value="Superhero">Superhero</option>
            <option value="Drama">Drama</option>
            <option value="Comedy/Drama">Comedy/Drama</option>
            <option value="Sports/Drama">Sports/Drama</option>
            <option value="Romance/Action">Romance/Action</option>
          </select>

          {/* Language Filter */}
          <select
            className="px-4 py-2 rounded-lg border border-gray-300"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}>
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Urdu">Urdu</option>
          </select>

          {/* Rating Filter */}
          <select
            className="px-4 py-2 rounded-lg border border-gray-300"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}>
            <option value="">All Ratings</option>
            <option value="9">9+ Stars</option>
            <option value="8">8+ Stars</option>
            <option value="7">7+ Stars</option>
          </select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid gap-x-8 gap-y-16 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
              {/* Poster */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"/>

              {/* Movie Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600">{movie.genre}</p>
                <p className="flex items-center justify-center text-sm text-yellow-500 font-medium mt-2">
                  <FaStar className="mr-1" /> {movie.rating}
                </p>

                {/* Book Now */}
                <button
                  onClick={() => navigate(`/movies/${movie.id}?type=now`)}
                  className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No movies found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Movies;
