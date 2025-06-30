import { useEffect, useRef } from "react";
function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []); // solo al primo mount
  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
}

export default FocusableInput;
