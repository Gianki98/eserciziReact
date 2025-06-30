import Color from "./Color";
function Colors({ colors }) {
  return (
    <>
      <ul>
        {colors.map((x) => (
          <Color key={x.id} color={x} />
        ))}
      </ul>
    </>
  );
}

export default Colors;
