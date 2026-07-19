import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

const ItemModal = ({ card, isOpen, onClose, onDeleteItem }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;

  const handleDeleteClick = () => {
    onDeleteItem(card);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        />

        <img className="modal__image" src={card.imageUrl} alt={card.name} />

        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          {isOwn && (
            <button
              type="button"
              className="modal__delete-button"
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
