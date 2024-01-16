import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
