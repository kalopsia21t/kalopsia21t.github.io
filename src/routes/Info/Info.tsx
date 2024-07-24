import styled from "styled-components";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

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
  margin-left: 0.5vh;
`;

export default function Info() {
  return (
    <InfoContainer>
      <a
        href="https://www.linkedin.com/in/taras-palii-a1b414116/"
        target="_blank"
      >
        LinkedIn <SmallLinkExternal />
      </a>
      <a href="https://www.codewars.com/users/kalopsia21t" target="_blank">
        CodeWars <SmallLinkExternal />
      </a>
      <a href="https://github.com/kalopsia21t" target="_blank">
        GitHub <SmallLinkExternal />
      </a>
    </InfoContainer>
  );
}
