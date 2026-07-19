import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });

    setIsValid(evt.target.closest("form").checkValidity());
  }
  return { values, setValues, handleChange, isValid };
}
export default useForm;
