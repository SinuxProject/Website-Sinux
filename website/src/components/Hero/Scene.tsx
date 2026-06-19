import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
  Torus,
} from '@react-three/drei';
import * as THREE from 'three';

// The glowing distorted core — represents the kernel.
function KernelCore() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.15;
      mesh.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.3, 6]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.4}
          distort={0.35}
          speed={1.6}
          roughness={0.1}
          metalness={0.85}
        />
      </Icosahedron>
    </Float>
  );
}

// Orbiting wireframe rings — represent the surrounding subsystems.
function Rings() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.z = t * 0.1;
      group.current.rotation.x = t * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Torus args={[2.2, 0.012, 16, 100]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.6} />
      </Torus>
      <Torus args={[2.7, 0.01, 16, 100]} rotation={[Math.PI / 1.7, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.5} />
      </Torus>
      <Torus args={[3.1, 0.008, 16, 100]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.4} />
      </Torus>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{position: [0, 0, 6], fov: 50}}
      dpr={[1, 2]}
      gl={{antialias: true, alpha: true}}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={120} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={80} color="#a78bfa" />

      <KernelCore />
      <Rings />

      <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}
