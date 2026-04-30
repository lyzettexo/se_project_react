import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, apiKey } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
        />
      </div>
      <ModalWithForm
        name="add-garment"
        buttonText="Add garment"
        title="New Garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="modal__input"
            placeholder="Name"
            autoComplete="name"
            required
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image URL
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__radio-label modal__radio_type_radio">
            <input
              id="hot"
              type="radio"
              name="weatherType"
              value="hot"
              className="modal__radio-input"
            />
            Hot
          </label>
          <label className="modal__radio-label modal__radio_type_radio">
            <input
              id="warm"
              type="radio"
              name="weatherType"
              value="warm"
              className="modal__radio-input"
            />
            Warm
          </label>
          <label className="modal__radio-label modal__radio_type_radio">
            <input
              id="cold"
              type="radio"
              name="weatherType"
              value="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        card={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
