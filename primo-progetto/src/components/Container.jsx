import { useState } from "react";

function Container({ children, title }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
  };
  return (
    <div style={containerStyle}>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>{title}</button>
      {!isCollapsed && children}
    </div>
  );
}
export default Container;
