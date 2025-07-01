import { useState } from "react";

function Container({ children, title }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
  };
  return (
    <div style={containerStyle}>
      <h3 onClick={() => setIsCollapsed(!isCollapsed)}>{title}</h3>
      {!isCollapsed && children}
    </div>
  );
}
export default Container;
