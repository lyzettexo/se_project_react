import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = ({
  weatherData,
  handleAddClick,
  isLoggedIn,
  onRegisterClick,
  onLoginClick,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  if (!weatherData) return null;

  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <div
        className={`header__nav ${
          isMobileMenuOpened ? "header__nav--opened" : ""
        }`}
      >
        <ToggleSwitch />

        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-button"
        >
          + Add Clothes
        </button>

        {isLoggedIn ? (
          <NavLink className="header__nav-link" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>

              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </NavLink>
        ) : (
          <div className="header__auth-buttons">
            <button
              onClick={onRegisterClick}
              type="button"
              className="header__signup-button"
            >
              Sign Up
            </button>

            <button
              type="button"
              className="header__signin-button"
              onClick={onLoginClick}
            >
              Log In
            </button>
          </div>
        )}

        {isMobileMenuOpened && (
          <button
            className="header__mobile-close"
            onClick={handleMobileMenuClick}
            type="button"
          />
        )}
      </div>

      <button
        className="header__menu-button"
        type="button"
        onClick={handleMobileMenuClick}
      >
        <span className="header__menu-line"></span>
        <span className="header__menu-line"></span>
      </button>
    </header>
  );
};

export default Header;
