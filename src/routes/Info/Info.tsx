import styled from "styled-components";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

import WrappedLink from "../../components/WrappedLink";

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: inline-flex;
  height: 12vh;
  margin: 6vh;
  flex-direction: column;

  @media only screen and (max-width: 1020px) {
    margin: 1vh;
    max-width: 24vh;
    padding-bottom: 6vh;
  }
`;

const SmallLinkExternal = styled(LinkExternal)`
  width: 1.5vh;
`;

export default function Info() {
  return (
    <InfoContainer>
      <WrappedLink
        href="https://www.linkedin.com/in/taras-palii-a1b414116/"
        target="_blank"
      >
        LinkedIn <SmallLinkExternal />
      </WrappedLink>
      <WrappedLink
        href="https://www.codewars.com/users/kalopsia21t"
        target="_blank"
      >
        CodeWars <SmallLinkExternal />
      </WrappedLink>
      <WrappedLink href="https://github.com/kalopsia21t" target="_blank">
        GitHub <SmallLinkExternal />
      </WrappedLink>
    </InfoContainer>
  );
}
