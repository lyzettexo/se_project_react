import "./WeatherCard.css";
import sun from "../../assets/sun.jpg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={sun} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
