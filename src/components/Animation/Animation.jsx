import { Canvas, useFrame } from "@react-three/fiber";

// import { Stats, OrbitControls } from "@react-three/drei";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";
import { useRef } from "react";

function Sphere() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += Math.PI * 0.005;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 32, 32]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
}

function Animation() {
  return (
    <>
      <Canvas>
        <pointLight position={[50, 50, 50]} decay={0} intensity={Math.PI} />
        <Sphere />
        {/* <OrbitControls />
        <Stats /> */}
      </Canvas>
    </>
  );
}

export default Animation;
