import Property from "./Property";
import "./Properties.css";
import { useState } from "react";

function Properties({ data }) {
  const [num, setNum] = useState(0);
  const [happy, Toggle] = useState(true);
  console.log("component called again")
  console.log(num);
  const ToggleListener = () => Toggle(!happy);
  const handleEventListener = () => {
    setNum((num) => num + 2);
    console.log(`value is ${num}`)
  };
  return (
    <div>
      {data.map((p) => (
        <Property key={p.id} {...p} />
      ))}
      <p style={{fontSize: "50px", cursor: "pointer"}} onClick={ToggleListener}>{happy ? ":)" : ":("}</p>
      <p>Incremented value is {num}</p>
      <button onClick={handleEventListener}>Click</button>
    </div>
  );
}
export default Properties;
