import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Optimized Book Component
function Book({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05 + rotation[1];
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef} position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[0.8, 1, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.5} />
        </mesh>
        <mesh position={[0.02, 0, 0]}>
          <boxGeometry args={[0.75, 0.95, 0.12]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

// Optimized Light Bulb
function LightBulb({ position }: { position: [number, number, number] }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 0.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial
            color="#ffd700"
            emissive="#ffd700"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.15, 8]} />
          <meshStandardMaterial color="#888888" metalness={0.5} roughness={0.5} />
        </mesh>
        <pointLight ref={lightRef} color="#ffd700" intensity={0.5} distance={3} />
      </group>
    </Float>
  );
}

// Optimized Graduation Cap
function GraduationCap({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
      <group position={position} rotation={[0.2, 0.3, 0.1]}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1, 0.05, 1]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const count = 40;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#34d399"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      {/* Reduced set of objects for performance */}
      <Book position={[-5, 2, -2]} rotation={[0.2, 0.5, 0.1]} color="#2dd4bf" />
      <Book position={[5, -1, -1]} rotation={[-0.1, -0.3, 0.2]} color="#1a1a2e" />

      <LightBulb position={[4, 2, 0]} />
      <GraduationCap position={[0, 3, -2]} />

      <Particles />
    </>
  );
}

export function EducationalScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 10 : 8], fov: 50 }}
        dpr={1} // Lock DPR to 1 for performance on high-res screens
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
