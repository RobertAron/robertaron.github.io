import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function DigitalSpinner() {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.001;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[3, 1]} />
      <meshBasicMaterial color="white" attach="material" wireframe={true} />
    </mesh>
  );
}

export function CanvasArea() {
  return (
    <div className="w-[300px]">
      <Canvas className="aspect-square">
        <ambientLight intensity={10} />
        <pointLight position={[10, 10, 10]} />
        <DigitalSpinner />
      </Canvas>
    </div>
  );
}
