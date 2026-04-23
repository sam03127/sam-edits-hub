import { useState } from "react";

export default function BeforeAfter({ before, after }) {
  const [value, setValue] = useState(50);

  return (
    <div>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src={after} style={{ width: "100%", position: "absolute" }} />
        <div style={{ width: value + "%", overflow: "hidden" }}>
          <img src={before} style={{ width: "100%" }} />
        </div>
      </div>

      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  );
}
