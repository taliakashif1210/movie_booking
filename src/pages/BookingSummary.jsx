import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movie, selectedSeats, selectedShowtime } = location.state || {};

  if (!movie || !selectedSeats || !selectedShowtime) {
    return (
      <div className="text-center py-20 text-gray-600">
        No booking details found.
      </div>
    );
  }

  const pricePerSeat = 10;
  const totalPrice = selectedSeats.length * pricePerSeat;

  const handleConfirm = () => {
    alert(`🎉 Booking Confirmed for ${movie.title}!`);
    navigate("/"); 
  };

  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Booking Summary
        </h2>

        {/* Movie Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-28 h-40 object-cover rounded-md shadow"/>
          <div>
            <h3 className="text-lg font-medium text-gray-800">{movie.title}</h3>
            <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
            <p className="text-sm text-gray-600">
              Showtime: <span className="font-medium">{selectedShowtime}</span>
            </p>
          </div>
        </div>

        {/* Seats */}
        <div className="mb-4">
          <h3 className="text-md font-medium text-gray-800">Seats:</h3>
          <p className="text-sm text-gray-700">
            {selectedSeats.join(", ")}
          </p>
        </div>

        {/* Total Price */}
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-800">Total Price:</h3>
          <p className="text-lg font-semibold text-green-600">
            ${totalPrice}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
