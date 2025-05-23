import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("PLACEHOLDER");

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((txt) => setTitle(txt))
      .catch((e) => console.error(e));
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
