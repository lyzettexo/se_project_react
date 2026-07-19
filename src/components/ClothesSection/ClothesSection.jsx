import "./ClothesSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  cards,
  onCardClick,
  onAddNewClick,
  onCardDelete,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userClothingItems = cards.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your items</h2>

        <button
          type="button"
          className="clothes-section__add-button"
          onClick={onAddNewClick}
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__items">
        {userClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </section>
  );
};

export default ClothesSection;
