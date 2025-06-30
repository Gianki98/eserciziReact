import { useRef } from "react";

function UncontrolledLogin() {
  const formRef = useRef();

  function onLogin(event) {
    event.preventDefault();
    const user = event.target.user.value;
    const psw = event.target.psw.value;
    const check = event.target.check.checked;
    console.log("Username:", user, "Password:", psw, "Remember:", check);
  }
  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const username = formData.get("user");
    const password = formData.get("psw");
    const rememberMe = formData.get("check");
    console.log(
      "Username:",
      username,
      "Password:",
      password,
      "Remember:",
      rememberMe
    );
  }
  return (
    <>
      <form ref={formRef} onSubmit={onLogin}>
        Username
        <input name="user" type="text" /> <br />
        Password
        <input name="psw" type="password" />
        <br />
        Remember me
        <input name="check" type="checkbox" />
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={loginWithFormData}>
          Login with FormData
        </button>
      </form>
    </>
  );
}

export default UncontrolledLogin;
