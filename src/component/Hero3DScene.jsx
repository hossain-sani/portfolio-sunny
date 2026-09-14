/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const COLORS = {
  cyan: "#22d3ee",
  green: "#10b981",
  pink: "#ec4899",
};

function WireShape({ geometry, color, position, rotationSpeed, scale }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * rotationSpeed;
    ref.current.rotation.y += delta * rotationSpeed * 1.4;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <primitive object={geometry} attach="geometry" />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function DotSphere({ position, radius, color }) {
  const points = useMemo(() => {
    const count = 320;
    const positions = new Float32Array(count * 3);
    const r = radius;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [radius]);

  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x += delta * 0.05;
  });

  return (
    <points ref={ref} position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.045} transparent opacity={0.8} />
    </points>
  );
}

function SceneContent() {
  const groupRef = useRef();

  const geometries = useMemo(() => {
    const torusA = new THREE.TorusGeometry(2.2, 0.03, 12, 90);
    const torusB = new THREE.TorusGeometry(1.5, 0.025, 10, 80);
    const icosa = new THREE.IcosahedronGeometry(1.4, 1);
    return { torusA, torusB, icosa };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { pointer } = state;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.25,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.6}>
        <WireShape
          geometry={geometries.torusA}
          color={COLORS.cyan}
          position={[3.4, 1.4, 0]}
          rotationSpeed={0.25}
        />
        <DotSphere position={[-3.2, -1.2, -1]} radius={0.8} color={COLORS.pink} />
      </Float>

      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.2}>
        <WireShape
          geometry={geometries.icosa}
          color={COLORS.pink}
          position={[-3.8, 1.6, -1.5]}
          rotationSpeed={0.2}
        />
        <DotSphere position={[3, -1.6, -1]} radius={0.55} color={COLORS.cyan} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
        <WireShape
          geometry={geometries.torusB}
          color={COLORS.green}
          position={[0.2, -2.4, -2]}
          rotationSpeed={0.3}
        />
      </Float>
    </group>
  );
}

const Hero3DScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.8} />
      <SceneContent />
    </Canvas>
  );
};

export default Hero3DScene;