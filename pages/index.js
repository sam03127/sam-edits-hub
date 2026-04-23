import { useState } from "react";
import BeforeAfter from "../components/BeforeAfter";

export default function Home() {
  const presets = [
    {
      id: "1",
      name: "Cinematic Glow",
      price: 0,
      before: "https://picsum.photos/400/300?1",
      after: "https://picsum.photos/400/300?2",
      download: "/files/preset1.zip"
    },
    {
      id: "2",
      name: "Dark Moody Pack",
      price: 5,
      before: "https://picsum.photos/400/300?3",
      after: "https://picsum.photos/400/300?4",
      download: "/files/preset2.zip"
    }
  ];

  const download = (preset) => {
    const link = document.createElement("a");
    link.href = preset.download;
    link.download = preset.name;
    link.click();
  };

  return (
    <div style={{ padding: 20, background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>🔥 Sam Edits Hub</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
        {presets.map((p) => (
          <div key={p.id} style={{ background: "#111", padding: 15, borderRadius: 10 }}>
            <BeforeAfter before={p.before} after={p.after} />
            <h3>{p.name}</h3>
            <p>{p.price === 0 ? "Free" : "$" + p.price}</p>

            <button onClick={() => download(p)}>
              {p.price === 0 ? "Download" : "Buy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
