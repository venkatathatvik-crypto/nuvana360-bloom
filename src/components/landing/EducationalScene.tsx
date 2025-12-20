import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating Book Component
function Book({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + rotation[1];
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Book cover */}
        <mesh>
          <boxGeometry args={[0.8, 1, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Pages */}
        <mesh position={[0.02, 0, 0]}>
          <boxGeometry args={[0.75, 0.95, 0.12]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

// Light Bulb (Ideas) Component
function LightBulb({ position }: { position: [number, number, number] }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position}>
        {/* Bulb */}
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color="#ffd700"
            emissive="#ffd700"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 0.2, 16]} />
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </mesh>
        <pointLight ref={lightRef} color="#ffd700" intensity={1} distance={5} />
      </group>
    </Float>
  );
}

// Graduation Cap Component
function GraduationCap({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <group position={position} rotation={[0.2, 0.5, 0.1]}>
        {/* Cap top (mortarboard) */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1, 0.05, 1]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Cap base */}
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Tassel */}
        <mesh position={[0.4, 0.1, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// DNA Helix (Science) Component
function DNAHelix({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const y = (i - 10) * 0.15;
      const angle = i * 0.5;
      items.push(
        { pos: [Math.cos(angle) * 0.3, y, Math.sin(angle) * 0.3] as [number, number, number], color: '#2dd4bf' },
        { pos: [Math.cos(angle + Math.PI) * 0.3, y, Math.sin(angle + Math.PI) * 0.3] as [number, number, number], color: '#10b981' }
      );
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {spheres.map((sphere, i) => (
          <mesh key={i} position={sphere.pos}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              emissive={sphere.color}
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Neural Network Node
function NeuralNode({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.15, 1]} />
        <MeshDistortMaterial
          color="#34d399"
          emissive="#34d399"
          emissiveIntensity={0.3}
          distort={0.3}
          speed={2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Pencil Component
function Pencil({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group position={position} rotation={[0, 0, 0.5]}>
        {/* Body */}
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 6]} />
          <meshStandardMaterial color="#ffd93d" metalness={0.2} roughness={0.6} />
        </mesh>
        {/* Tip */}
        <mesh position={[0, -0.65, 0]}>
          <coneGeometry args={[0.05, 0.15, 6]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.3} roughness={0.5} />
        </mesh>
        {/* Eraser */}
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
          <meshStandardMaterial color="#ff6b6b" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

// Atom Component
function Atom({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
      <group ref={groupRef} position={position}>
        {/* Nucleus */}
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Orbit rings */}
        {[0, Math.PI / 3, -Math.PI / 3].map((rot, i) => (
          <mesh key={i} rotation={[rot, 0, 0]}>
            <torusGeometry args={[0.4, 0.01, 8, 64]} />
            <meshStandardMaterial
              color="#2dd4bf"
              emissive="#2dd4bf"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
        {/* Electrons */}
        {[0, Math.PI / 3, -Math.PI / 3].map((rot, i) => (
          <mesh key={`electron-${i}`} position={[0.4 * Math.cos(rot), 0.4 * Math.sin(rot), 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial
              color="#34d399"
              emissive="#34d399"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
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
        size={0.05}
        color="#34d399"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#2dd4bf" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#10b981" />

      {/* Educational Objects */}
      {/* Educational Objects - Spread out to clear center */}
      <Book position={[-6, 2.5, -2]} rotation={[0.2, 0.5, 0.1]} color="#2dd4bf" />
      <Book position={[6.5, -1.5, -1]} rotation={[-0.1, -0.3, 0.2]} color="#10b981" />
      <Book position={[-5, -3, 1]} rotation={[0.1, 0.8, -0.1]} color="#6366f1" />

      <LightBulb position={[5, 3, 0]} />
      <LightBulb position={[-7, 0, 1]} />

      <GraduationCap position={[0, 4.5, -2]} />

      <DNAHelix position={[7, 1, -2]} />

      <NeuralNode position={[-6, -1.5, 2]} />
      <NeuralNode position={[4, -3.5, 1]} />
      <NeuralNode position={[6, 2.5, 1]} />

      <Pencil position={[-4, 3.5, 2]} />
      <Pencil position={[5, -3, -1]} />

      <Atom position={[-5.5, 3, -1]} />

      {/* Particles */}
      <Particles />
    </>
  );
}

export function EducationalScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
