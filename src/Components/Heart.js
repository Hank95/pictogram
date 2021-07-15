import React, { useState } from "react";
import Heart from "react-animated-heart";

function App() {
  const [isClick, setClick] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setClick(!isClick);
  }

  return (
    <div className="Appz">
      <p className="Counter">{count}</p>
      <Heart className="Heart" isClick={isClick} onClick={handleClick} />
    </div>
  );
}

export default App;
