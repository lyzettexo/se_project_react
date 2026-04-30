import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === name ? "modal_opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        >
          ×
        </button>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
