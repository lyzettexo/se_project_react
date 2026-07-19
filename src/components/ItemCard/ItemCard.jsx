import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = (evt) => {
    evt.stopPropagation();

    onCardLike({
      _id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__name">{item.name}</h2>

      {currentUser?._id && (
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLike}
          aria-label={isLiked ? "Unlike item" : "Like item"}
        />
      )}

      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;
