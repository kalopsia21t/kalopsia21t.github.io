import Animation from "../../components/Animation";
import Layout from "../../components/Layout";
import "./Root.css";

export default function Root() {
  return (
    <>
      <Animation />
      <main id="main">
        <Layout />
      </main>
    </>
  );
}
