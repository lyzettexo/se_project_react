import "./EditProfileModal.css";
import { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";

const EditProfileModal = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const { values, setValues, handleChange, isValid } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser(values);
  }

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: currentUser?.name || "",
        avatar: currentUser?.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  return (
    <ModalWithForm
      name="edit-profile"
      buttonText="Save changes"
      title="Change profile data"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={true}
    >
      <label htmlFor="profile-name" className="modal__label">
        Name
        <input
          type="text"
          id="profile-name"
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

      <label htmlFor="profile-avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          id="profile-avatar"
          name="avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
