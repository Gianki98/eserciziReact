import Age from "./Age";
import Message from "./Message";

function Welcome(props) {
  return (
    <>
      <p>
        Welcome <strong>{props.name || "Utente"}</strong>!
      </p>

      {props.age > 18 && <Age age={props.age} />}

      {props.age != null && <Age age={props.age} />}

      {props.age > 18 && props.age < 65 && <Age age={props.age} />}

      {props.age > 18 && props.name === "John" && <Age age={props.age} />}

      <Age age={props.age} />

      <Message age={props.age} />
    </>
  );
}

export default Welcome;
