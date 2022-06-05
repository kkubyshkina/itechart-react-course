import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./states/Card";
function App() {
  const [title, setTitle] = useState("Caption");
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
  tempor incididunt ut labore et dolore magna aliqua"
  );

  return (
    <div>
      <Header />
      <div className="position">
        <Card title={title} text={text} />
        <Card title={title} text={text} />
        <Card title={title} text={text} />
      </div>
    </div>
  );
}

export default App;
