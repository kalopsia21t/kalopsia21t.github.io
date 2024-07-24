import styled from "styled-components";

const ContactText = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 56vh;
  display: inline-flex;
  align-items: flex-end;
  margin: 6vh;
  font-family: "Raleway";
  font-size: 1.8vh;
`;

export default function Contact() {
  return (
    <>
      <ContactText>
        <a href="mailto:taras505paliy@gmail.com">Mail Me</a>
      </ContactText>
    </>
  );
}
