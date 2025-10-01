import React from "react";
import movies, { upcomingMovies } from "../data/movies.js";
import heroBg from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleMovieClick = (movie, type) => {
    navigate(`/movies/${movie.id}`, { state: { movie, type } });
  };
  
  return (
    <div className="w-full">

      {/* main container */}
      <section className="relative text-white text-center min-h-[85vh] flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${heroBg})`, 
          }}>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to Movie Booking
          </h1>
          <p className="pt-4 text-lg md:text-2xl max-w-2xl mx-auto opacity-90">
            Book tickets for the latest blockbusters & upcoming hits — all in one place.
          </p>
        </div>
      </section>

      {/* Now Showing Movies */}
      <section className="py-12 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800 text-center">
          Now Showing
        </h2>

        <div className="grid gap-x-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.slice(0, 4).map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}?type=now`)}
            className="text-center transform transition hover:scale-105">
            
            <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-xl shadow-md"/>

            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-900 text-left">
                {movie.title}
              </h3>
            </div>
          </div>))}
        </div>
      </section>

     {/* Upcoming Movies */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800 text-center">
          Upcoming Movies
        </h2>
        <div className="grid gap-x-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {upcomingMovies.slice(0, 4).map((movie) => (
            <div key={movie.id} 
            onClick={() => navigate(`/movies/${movie.id}?type=upcoming`)}
            className="text-center transform transition hover:scale-105">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 text-left">
                  Coming Soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;