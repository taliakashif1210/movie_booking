import inceptionPoster from "../assets/inception.jpg";
import interstellarPoster from "../assets/interstellar.jpg";
import darkKnightPoster from "../assets/dark-knight.jpg";
import endgamePoster from "../assets/endgame.jpg";
import dunePoster from "../assets/dune.jpg";
import batmanPoster from "../assets/batman.jpg";
import pkPoster from "../assets/pk.jpg";
import dangalPoster from "../assets/dangal.jpg";
import krrishPoster from "../assets/krrish4.jpg"; 
import bolPoster from "../assets/bol.jpg";
import parwaazPoster from "../assets/parwaaz.jpg";
import maulaJattPoster from "../assets/maula-jatt.jpg"; 

//now showing movies
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    poster: inceptionPoster,
    language: "English",
    description:
      "A thief who enters the dreams of others to steal secrets is given a chance to have his past crimes forgiven if he can successfully plant an idea in someone's mind.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    showtimes: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"],
  },
  {
    id: 2,
    title: "Parwaaz Hai Junoon",
    genre: "Romance/Action",
    rating: 7.6,
    poster: parwaazPoster,
    language: "Urdu",
    description:
      "A tribute to Pakistan Air Force, showcasing love, patriotism, and the challenges of fighter pilots.",
    cast: ["Hamza Ali Abbasi", "Ahad Raza Mir", "Hania Aamir", "Shaz Khan"],
    showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    poster: darkKnightPoster,
    language: "English",
    description:
      "Batman sets out to dismantle organized crime in Gotham with the help of allies, but faces chaos unleashed by the Joker.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
    showtimes: ["2:00 PM", "6:00 PM", "9:30 PM"],
  },
  {
    id: 4,
    title: "PK",
    genre: "Comedy/Drama",
    rating: 8.2,
    poster: pkPoster,
    language: "Hindi",
    description:
      "An innocent alien lands on Earth and questions societal norms, religion, and traditions, sparking both laughter and controversy.",
    cast: ["Aamir Khan", "Anushka Sharma", "Sanjay Dutt", "Sushant Singh Rajput"],
    showtimes: ["12:30 PM", "4:00 PM", "7:30 PM"],
  },
  {
    id: 5,
    title: "Bol",
    genre: "Drama",
    rating: 8.0,
    poster: bolPoster,
    language: "Urdu",
    description:
      "A powerful social drama highlighting gender discrimination and societal injustices in Pakistan.",
    cast: ["Atif Aslam", "Mahira Khan", "Humaima Malick", "Shafqat Cheema"],
    showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"],
  },
  {
    id: 6,
    title: "Interstellar",
    genre: "Adventure",
    rating: 8.6,
    poster: interstellarPoster,
    language: "English",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival as Earth becomes uninhabitable.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    showtimes: ["1:00 PM", "4:30 PM", "8:00 PM"],
  },
  {
    id: 7,
    title: "Dangal",
    genre: "Sports/Drama",
    rating: 8.4,
    poster: dangalPoster,
    language: "Hindi",
    description:
      "Based on a true story, a father trains his daughters to become world-class wrestlers against all societal odds.",
    cast: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh", "Sanya Malhotra"],
    showtimes: ["1:30 PM", "5:00 PM", "8:30 PM"],
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    genre: "Superhero",
    rating: 8.4,
    poster: endgamePoster,
    language: "English",
    description:
      "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson", "Chris Hemsworth"],
    showtimes: ["12:30 PM", "4:00 PM", "7:30 PM", "11:00 PM"],
  },
];

// upcoming movies
const upcomingMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    rating: null,
    poster: dunePoster,
    language: "English",
    description:
      "Paul Atreides unites with the Fremen to wage war against the conspirators who destroyed his family.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    showtimes: [],
  },
  {
    id: 2,
    title: "Maula Jatt Returns",
    genre: "Action/Drama",
    rating: null,
    poster: maulaJattPoster, 
    language: "Urdu",
    description:
      "The legend of Maula Jatt continues in a reimagined story of vengeance and honor.",
    cast: ["Fawad Khan", "Hamza Ali Abbasi", "Mahira Khan", "Humaima Malick"],
    showtimes: [],
  },
  {
    id: 3,
    title: "Krrish 4",
    genre: "Superhero",
    rating: null,
    poster: krrishPoster, 
    language: "Hindi",
    description:
      "Rohit Mehra’s legacy continues as Krrish faces his most powerful enemy yet.",
    cast: ["Hrithik Roshan", "Priyanka Chopra", "Rekha"],
    showtimes: [],
  },
  {
    id: 4,
    title: "The Batman 2",
    genre: "Action",
    rating: null,
    poster: batmanPoster,
    language: "English",
    description:
      "Batman returns to face new threats and unravel Gotham’s darkest secrets.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright", "Paul Dano"],
    showtimes: [],
  },
];

export default movies;
export { upcomingMovies };

