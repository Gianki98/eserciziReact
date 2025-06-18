import Age from "./Age";
import Message from "./Message";

function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome <strong>{name || "Utente"}</strong>!
      </p>

      {age > 18 && <Age age={age} />}

      {age !== undefined && age !== null && <Age age={age} />}

      {age > 18 && age < 65 && <Age age={age} />}

      {age > 18 && name === "John" && <Age age={age} />}

      <Message age={age} />
    </>
  );
}

export default Welcome;
