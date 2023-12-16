import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <main id="main">
        <header id="header">
          <h1>Taras Palii</h1>
          <h3>Software Engineer</h3>

          <Navigation />
        </header>
      </main>
    </>
  );
}

export default App;
