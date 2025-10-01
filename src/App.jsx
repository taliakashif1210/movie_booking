import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import BookingSummary from "./pages/BookingSummary";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const showFooterPaths = ["/", "/movies", "/summary"];

  const shouldShowFooter = showFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/booking" element={<Booking />} />
          <Route path="/summary" element={<BookingSummary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      {shouldShowFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
