import {useState} from "react";

export function useInputChange(initialState) {
  const [values, setValues] = useState({initialState});
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
    setFormIsValid(e.target.closest('.form').checkValidity() && values['email'])
  }

  return {values, setValues, formIsValid, setFormIsValid, handleChange}
}