function Message(props) {
  return (
    <>
      <p>Your age is {props.age > 18 ? props.age : "You are very young!"}</p>
    </>
  );
}
export default Message;
