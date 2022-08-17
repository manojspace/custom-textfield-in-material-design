import { useState } from "react";
import "./styles.css";

// https://material.io/components/text-fields#interactive-demo

export default function OutlinedInput({
  fontSize = "1rem",
  label,
  placeholder,
  paddingTop,
  fontWeight
}) {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <div className="textfield">
        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
        />
        <label>Label</label>
      </div>
    </div>
  );
}
