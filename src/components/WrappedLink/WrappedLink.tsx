import styled from "styled-components";

const WrappedLink = styled.a`
  font-family: "Raleway";
  font-size: 1.8vh;
  text-decoration: none;
  margin-top: 1vh;
  display: inline-flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.87);

  &:hover {
    color: rgba(255, 255, 255, 0.43);
  }
`;

export default WrappedLink;
