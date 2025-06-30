import { useState } from "react";

function TodoList() {
  //inizialmente vuoto
  const [todos, setTodos] = useState([]);

  // stringa vuota
  const [inputValue, setInputValue] = useState("");

  // Funzione per aggiungere un nuovo todo
  const addTodo = () => {
    // Controllo che l'input non sia vuoto (trim rimuove spazi)
    if (inputValue.trim() !== "") {
      // trim rimuove gli spazi vuoti all'inizio e alla fine ed evita che l'utente metta todo con solo spazi vuoti
      // Uso lo spread operator per creare un nuovo array con tutti i todos esistenti + il nuovo
      setTodos([...todos, inputValue]);

      // Pulisco l'input dopo aver aggiunto il todo
      setInputValue("");
    }
  };

  // Funzione per resettare tutti i todos
  const resetTodos = () => {
    // Setto l'array vuoto per cancellare tutto
    setTodos([]);
  };

  // Funzione per rimuovere un singolo todo tramite indice
  const removeTodo = (indexToRemove) => {
    // Uso filter per creare un nuovo array senza l'elemento all'indice specificato
    // (_, i) => il primo parametro è l'elemento (non mi serve, uso _), il secondo è l'indice
    const newTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newTodos);
  };

  // Funzione per gestire il cambio del valore nell'input
  const handleInputChange = (e) => {
    // Aggiorno lo state con il valore corrente dell'input
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Inserisci un nuovo todo..."
      />

      <button onClick={addTodo}>Aggiungi Todo</button>

      <button onClick={resetTodos}>Reset Tutti</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>Nessun todo presente. Aggiungine uno!</p>}
    </div>
  );
}

export default TodoList;
