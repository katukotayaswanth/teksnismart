import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(2000 * 3);
  const radius = 5;
  
  for (let i = 0; i < 2000; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.x = Math.sin(time * 0.1);
      ref.current.rotation.y = Math.sin(time * 0.15);
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#6495ED"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 bg-gray-900 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "default",
        }}
        style={{ position: 'fixed' }}
        frameloop="always"
      >
        <color attach="background" args={['#0a0a0a']} />
        <Stars />
      </Canvas>
    </div>
  );
}