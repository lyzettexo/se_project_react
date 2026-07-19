import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const RegisterModal = ({ isOpen, onRegister, onClose }) => {
  const defaultValues = {
    name: "",
    avatar: "",
    email: "",
    password: "",
  };
  const { values, setValues, handleChange, isValid } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    if (!isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      name="register"
      buttonText="Sign up"
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="register-name" className="modal__label">
        Name
        <input
          type="text"
          id="register-name"
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

      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          id="register-avatar"
          name="avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          id="register-email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          id="register-password"
          name="password"
          className="modal__input"
          placeholder="Password"
          autoComplete="new-password"
          required
          minLength="8"
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
