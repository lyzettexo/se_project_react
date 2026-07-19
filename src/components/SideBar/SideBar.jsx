import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import avatarDefault from "../../assets/avatar.svg";
import "./SideBar.css";

export default function SideBar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const username = currentUser?.name || "";
  const avatar = currentUser?.avatar || avatarDefault;

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {avatar ? (
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar sidebar__avatar_none">
            {username.charAt(0).toUpperCase()}
          </span>
        )}

        <div className="sidebar__user-name">{username}</div>
      </div>

      <button
        type="button"
        className="sidebar__edit-button"
        onClick={onEditProfile}
      >
        Edit profile
      </button>

      <button
        type="button"
        className="sidebar__signout-button"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </aside>
  );
}
