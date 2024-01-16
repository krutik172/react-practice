import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ObjDemo() {
  const [emojis, setEmoji] = useState([{ id: uuid(), emoji: ":)" }]);
  const increasep1score = () => {
    setEmoji((obj) => {
      return [...obj, { id: uuid(), emoji: ":(" }];
    });
  };
  const deleteEmoji = (id) => {
    setEmoji((prevEmojies) => {
      return prevEmojies.filter((e) => e.id != id);
    });
  };
  return (
    <div>
      {emojis.map((s) => (
        <span
          onClick={() => deleteEmoji(s.id)}
          key={s.id}
          style={{ fontSize: "4rem" }}
        >
          {s.emoji}
        </span>
      ))}
      <button onClick={increasep1score}>Add emoji</button>
    </div>
  );
}
