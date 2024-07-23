import { Outlet } from "react-router";

import Navigation from "../Navigation";

import "./Layout.css";

function Layout() {
  return (
    <div id="layout-container">
      <div id="layout-content">
        <header id="header">
          <h1>Taras Palii</h1>
          <h3>Software Engineer</h3>

          <Navigation />
        </header>

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
