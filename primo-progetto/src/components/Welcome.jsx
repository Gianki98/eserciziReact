import Age from "./Age";

function Welcome(props) {
  return (
    <>
      <p>
        Welcome <strong>{props.name}</strong>!
      </p>
      <Age age={props.age} />
    </>
  );
}

export default Welcome;
