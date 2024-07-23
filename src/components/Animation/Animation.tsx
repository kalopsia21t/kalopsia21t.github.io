import { Canvas } from "@react-three/fiber";

import { Stats, OrbitControls } from "@react-three/drei";

import Sphere from "./Sphere";

function Animation() {
  return (
    <>
      <Canvas>
        <Sphere />
        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
}

export default Animation;
