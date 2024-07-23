import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 4vh;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
`;

function Navigation() {
  return (
    <Nav>
      <ul>
        <Li>
          <Link to={"/"}>Home</Link>
        </Li>
        <Li>
          <Link to={"/about"}>About</Link>
        </Li>
        <Li>
          <Link to={"/contact"}>Contact</Link>
        </Li>
      </ul>
    </Nav>
  );
}

export default Navigation;
