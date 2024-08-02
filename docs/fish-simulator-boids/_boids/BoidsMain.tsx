import { Canvas } from "@react-three/fiber";
import { FishesComponent } from "./InstancedFishes";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { RotateCcw } from "lucide-react";

const BACKGROUND_COLOR = "#444767";
const EDGE_VISUAL_COLOR = "#40F0FA";
const outerBoundsDistance = 100;

export function BoidsMain() {
  const [id, setId] = useState(0);
  return (
    <div className="relative flex flex-col">
      <BoidsCanvas key={id} />
      <button
        className="absolute right-0 top-0 flex aspect-square items-center justify-center"
        onClick={() => setId(id + 1)}
        aria-label="Reload"
        title="Reload"
      >
        <RotateCcw />
      </button>
      <div className="self-center">
        Click and drag or scroll on the above to move the camera!
      </div>
    </div>
  );
}

export function BoidsCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, outerBoundsDistance * 1.1],
        near: 1,
        far: 2000,
      }}
      style={{ width: "unset", flexGrow: 1, height: "50vh" }}
      // linear
    >
      <OrbitControls />
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <mesh>
        <sphereGeometry args={[outerBoundsDistance, 32, 32]} />
        <meshBasicMaterial
          color={EDGE_VISUAL_COLOR}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
      <FishesComponent
        boxSize={12}
        outerBoundsForceScaling={3.1}
        alignmentForeScaling={6}
        cohesionForceScaling={0.6}
        separationForceScaling={0.3}
      />
      <pointLight position={[0, 100, 100]} intensity={50000} color="#C5DCE0" />
      <pointLight position={[0, 100, -100]} intensity={50000} color="#FE7558" />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
}
