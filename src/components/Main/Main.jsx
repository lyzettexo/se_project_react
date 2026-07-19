import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({
  weatherData,
  cards,
  onCardClick,
  onCardDelete,
  onCardLike,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {cards
            .filter((card) => {
              return card.weather === weatherData.type;
            })
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                item={filteredCard}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
                onCardLike={onCardLike}
              />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
