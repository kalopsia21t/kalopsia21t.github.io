import { Link, useLocation } from "react-router-dom";

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

const WrappedLink = styled(Link)`
  font-family: "Raleway";
  font-size: 1.8vh;
  text-decoration: none;

  color: rgba(255, 255, 255, 0.87);

  &:hover {
    color: rgba(255, 255, 255, 0.43);
  }
`;

const links = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/info",
    label: "Info",
  },
  {
    pathname: "/contact",
    label: "Contact",
  },
];

function Navigation() {
  const location = useLocation();

  const activeLink = "●";

  return (
    <Nav>
      <ul>
        {links.map((link, index) => {
          return (
            <Li key={`${index}-${link.label}`}>
              <WrappedLink to={link.pathname}>
                {link.pathname === location.pathname ? activeLink : link.label}
              </WrappedLink>
            </Li>
          );
        })}
      </ul>
    </Nav>
  );
}

export default Navigation;
