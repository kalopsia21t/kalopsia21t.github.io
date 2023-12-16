import { Outlet } from "react-router";

import Navigation from "../../Navigation/Navigation";

import "./Root.css";

export default function Root() {
  return (
    <>
      <main id="main">
        <header id="header">
          <h1>Taras Palii</h1>
          <h3>Software Engineer</h3>

          <Navigation />
        </header>

        <Outlet />
      </main>
    </>
  );
}
