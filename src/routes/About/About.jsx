import "./About.css";

const about_me = `Born in Kherson, Ukraine. 
    Currently based in Kyiv, I'm software engineer with many years of experience in web development.
    I'm passionate about good looking UI and love to play with 2D & 3D graphics.
`;

export default function About() {
  return (
    <>
      <div id="about">{about_me}</div>
    </>
  );
}
