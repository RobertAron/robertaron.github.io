import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";
import { LayoutGroup, motion } from "framer-motion";

function DigitalSpinner() {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
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
    <div className="aspect-square">
      <Canvas>
        <ambientLight intensity={10} />
        <pointLight position={[10, 10, 10]} />
        <DigitalSpinner />
      </Canvas>
    </div>
  );
}

export function ThreeAreaThing() {
  const [itemPosition, setItemPosition] = useState(["pos1", "pos2", "pos3"]);
  useEffect(() => {
    const interval = setInterval(() => {
      setItemPosition((curr) => {
        const [first, ...rest] = curr;
        return [...rest, first];
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateAreas: `
      "pos1 pos2"
      "pos3 pos3"
    `,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 2fr",
        width: 150 * 2 + 16,
        height: 150 * 3 + 16,
      }}
    >
      {itemPosition.map((ele, index) => (
        <motion.div
          key={index}
          layout
          layoutId={`${index}`}
          style={{ background: "blue", gridArea: ele }}
          transition={{ type: "spring", damping: 12, stiffness: 50 }}
          className="w-full"
        >
          <motion.div>
            <CanvasArea />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
