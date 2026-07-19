import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  cards,
  onCardClick,
  onCardDelete,
  onAddNewClick,
  onEditProfile,
  onCardLike,
  onSignOut,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfile={onEditProfile} onSignOut={onSignOut} />

      <ClothesSection
        cards={cards}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onAddNewClick={onAddNewClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
