import { useState } from "react";

export default function Smile(props) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="smile_wrapper">
        <img src={props.name} className="smile" onClick={handleClick}></img>
        <div className="counter">{count}</div>
      </div>
    </>
  );
}
