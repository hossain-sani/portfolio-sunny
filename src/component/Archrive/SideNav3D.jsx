/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";

const ACCENT = "#fbbf24";
const GLOW = "#f59e0b";

function Blob() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.12) * 0.35;
    ref.current.rotation.x = Math.cos(t * 0.1) * 0.25;
  });

  return (
    <mesh ref={ref} scale={1.05}>
      <icosahedronGeometry args={[1, 32]} />
      <MeshDistortMaterial
        color={ACCENT}
        emissive={GLOW}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.85}
        distort={0.45}
        speed={2}
      />
    </mesh>
  );
}

const SideNav3D = () => {
  return (
    <Canvas
      dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 3.4], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 4, 5]} intensity={1.6} color={ACCENT} />
      <pointLight position={[-4, -3, 2]} intensity={1.8} color={GLOW} />
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.9}>
        <Blob />
      </Float>
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default SideNav3D;