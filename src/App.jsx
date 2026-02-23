import { useState, useEffect } from "react";
import { getWeather } from "./services/weatherService";
import WeatherCard from "./components/weatherCard";
import SearchBar from "./components/SearchBar"; // <-- import SearchBar
import heroImage from "./reactimages/weather-hero.jpg";
import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("White Plains,MD,US");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather whenever city changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getWeather(city);
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setError("City not found. Please try again.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  // Pass this function to SearchBar as onSearch
  const handleSearch = (searchInput) => {
    setCity(searchInput);
  };

  return (
    <div className="app-background">
      <div className="weather-card-container">
        <h1>Path2Tech Weather App</h1>

        {/* Hero Image */}
        <img src={heroImage} alt="Weather Hero" className="hero-image" />

        <p>Find The Weather of a City or State</p>

        {/* Use the SearchBar component */}
        <SearchBar onSearch={handleSearch} />

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {/* Weather Card */}
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};
export default App;