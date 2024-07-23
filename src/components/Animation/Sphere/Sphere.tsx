import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import vertex from "./shaders/vertex.glsl?raw";
import fragment from "./shaders/fragment.glsl?raw";

import { useRef } from "react";

function Sphere() {
  const ref = useRef<Mesh>(null!);

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

export default Sphere;
