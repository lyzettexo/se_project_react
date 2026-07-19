import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, setValues, handleChange, isValid } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  useEffect(() => {
    if (!isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      name="add-garment"
      buttonText="Add garment"
      title="New Garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          id="name"
          name="name"
          className="modal__input"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
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
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>

      <fieldset className="add-item-modal__radio-buttons">
        <legend className="add-item-modal__legend">
          Select the weather type:
        </legend>

        <label className="add-item-modal__radio-label">
          <input
            id="hot"
            type="radio"
            name="weather"
            className="add-item-modal__radio-input"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          <span className="add-item-modal__radio-text">Hot</span>
        </label>

        <label className="add-item-modal__radio-label">
          <input
            id="warm"
            type="radio"
            name="weather"
            className="add-item-modal__radio-input"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <span className="add-item-modal__radio-text">Warm</span>
        </label>

        <label className="add-item-modal__radio-label">
          <input
            id="cold"
            type="radio"
            name="weather"
            className="add-item-modal__radio-input"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <span className="add-item-modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
