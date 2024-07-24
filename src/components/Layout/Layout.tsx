import { Outlet } from "react-router";

import Navigation from "../Navigation";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: calc(100% - 8vh);
  height: calc(100% - 8vh);
  border: 1px solid white;
  display: flex;
  margin: 4vh;
`;

const Header = styled.header`
  display: inline-flex;
  flex-direction: column;
  width: 50vh;
  height: 30vh;
  margin: 6vh;

  @media only screen and (max-width: 1020px) {
    width: 20vh;
    margin: 1vh;
  }
`;

const HeaderTitle = styled.h1`
  font-family: "Raleway";
`;

const HeaderSubTitle = styled.h3`
  font-family: "Raleway";
  font-style: italic;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <HeaderTitle>Taras Palii</HeaderTitle>
        <HeaderSubTitle>Software Engineer</HeaderSubTitle>

        <Navigation />
      </Header>

      <Outlet />
    </LayoutContainer>
  );
}

export default Layout;
