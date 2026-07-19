import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const LoginModal = ({ isOpen, onLogin, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, setValues, handleChange, isValid } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    if (!isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      name="login"
      buttonText="Log in"
      title="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          id="login-email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          id="login-password"
          name="password"
          className="modal__input"
          placeholder="Password"
          autoComplete="current-password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
