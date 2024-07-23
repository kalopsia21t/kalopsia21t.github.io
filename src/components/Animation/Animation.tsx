import { Canvas } from "@react-three/fiber";

import { Stats, OrbitControls } from "@react-three/drei";

import Sphere from "./Sphere";

function Animation() {
  return (
    <>
      <Canvas
        camera={{ fov: 60, near: 0.1, far: 10, position: [0, 0, Math.PI] }}
      >
        <Sphere />
        <OrbitControls />
        <Stats />
      </Canvas>
    </>
  );
}

export default Animation;
