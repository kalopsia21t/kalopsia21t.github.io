import styled from "styled-components";

const AboutContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 56vh;
  display: inline-flex;
  align-items: flex-end;
  margin: 6vh;
  font-family: "Raleway";
  font-size: 1.8vh;

  @media only screen and (max-width: 1020px) {
    margin: 1vh;
    max-width: 24vh;
    padding-bottom: 6vh;
  }

  @media only screen and (width: 390px) and (height: 844px) and (-webkit-device-pixel-ratio: 3) {
    margin: 1vh;
    height: 100%;
    padding: 0;
  }
`;
const about_me = `Born in Kherson, Ukraine. 
    Currently based in Kyiv, I'm software engineer with many years of experience in web development.
    I'm passionate about good looking UI and love to play with 2D & 3D graphics.
`;

export default function About() {
  return (
    <>
      <AboutContainer>{about_me}</AboutContainer>
    </>
  );
}
