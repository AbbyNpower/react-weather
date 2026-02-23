// src/components/WeatherCard.jsx

function WeatherCard({ weather }) {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, },
    weather: weatherDetails,
    wind: { speed },
  } = weather;

  const iconCode = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {name}, {country}
      </h2>

      <img src={iconUrl} alt="weather icon" />

      <p>
        <strong>Temperature:</strong> {temp}°F
      </p>

      <p>
        <strong>Feels Like:</strong> {feels_like}°F
      </p>

      <p>
        <strong>Condition:</strong> {weatherDetails[0].description}
      </p>

      <p>
        <strong>Wind Speed:</strong> {speed} mph
      </p>
    </div>
  );
}

export default WeatherCard;