import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

import vertex from "./shaders/vertex.glsl?raw";
import fragment from "./shaders/fragment.glsl?raw";

import { useEffect, useRef } from "react";

function Sphere() {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.z += Math.PI * 0.001;
  });

  const state = useThree();

  useEffect(() => {
    state.camera.setViewOffset(-0.5, 1.3, 1.3, 1.8, -2, -2);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 32, 32]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
}

export default Sphere;
