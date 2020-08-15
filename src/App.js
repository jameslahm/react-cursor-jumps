import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("johnsmit@gmail.com foo");

  return (
    <input
      type="email"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
