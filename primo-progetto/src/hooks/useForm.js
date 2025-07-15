import { useState } from "react";

function useForm() {
  // Stato per i valori del form
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Handler generico per gestire i cambiamenti
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funzione opzionale per resettare il form
  const resetForm = () => {
    setValues({
      username: "",
      password: "",
    });
  };

  // Restituiamo i valori e l'handler
  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
