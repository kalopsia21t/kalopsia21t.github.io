import Animation from "../../components/Animation";
import Layout from "../../components/Layout";

import styled from "styled-components";

const Main = styled.main`
  position: absolute;
  top: 0;
  display: flex;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;

export default function Root() {
  return (
    <>
      <Animation />
      <Main>
        <Layout />
      </Main>
    </>
  );
}
