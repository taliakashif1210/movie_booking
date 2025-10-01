import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id.toString() === id);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState("");

  if (!movie) {
    return (
      <div className="text-center py-20 text-gray-600">Movie not found.</div>
    );
  }

  const rows = 8;
  const cols = 10;
  const seats = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => `${row + 1}-${col + 1}`)
  );

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = () => {
    if (!selectedShowtime || selectedSeats.length === 0) {
      alert("Please select at least one seat and a showtime.");
      return;
    }

    navigate("/summary", {
      state: { movie, selectedSeats, selectedShowtime },
    });
  };

  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Booking for {movie.title}
        </h2>

        {/* Showtime Selection */}
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-800 mb-2">Select Showtime:</h3>
          <div className="flex flex-wrap gap-3">
            {movie.showtimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedShowtime(time)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedShowtime === time
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }`}>
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Seat Selection */}
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-800 mb-4">Select Seats:</h3>
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {seats.flat().map((seat) => (
              <button
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-10 h-10 text-sm rounded-md ${
                  selectedSeats.includes(seat)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}>
                {seat}
              </button>
            ))}
          </div>

          {/* Selected Showtime + Seats */}
          <div className="mt-8">
            <p className="text-sm text-gray-700">
              <span className="font-medium">Selected Time:</span>{" "}
              {selectedShowtime || "None"}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Selected Seats:</span>{" "}
              {selectedSeats.join(", ") || "None"}
            </p>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
