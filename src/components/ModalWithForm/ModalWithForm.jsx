import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText = "Save",
  secondaryButtonText,
  onSecondaryClick,
  onClose,
  isOpen,
  children,
  onSubmit,
  isValid,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        />

        <h3 className="modal__title">{title}</h3>

        <form className="modal__form" onSubmit={onSubmit} name={name}>
          {children}

          <div className="modal__button-container">
            <button type="submit" className="modal__button" disabled={!isValid}>
              {buttonText}
            </button>

            {secondaryButtonText && (
              <button
                type="button"
                className="modal__secondary-button"
                onClick={onSecondaryClick}
              >
                or {secondaryButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
