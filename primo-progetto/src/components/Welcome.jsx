import Age from "./Age";

function Welcome(props) {
  return (
    <>
      <p>
        Welcome <strong>{props.name || "Utente"}</strong>!
      </p>
      <Age age={props.age} />
    </>
  );
}

export default Welcome;
