
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Text3DModel = () => {
  const textRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/inter_bold.json"
          size={2}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Industrial Innovation
          <meshStandardMaterial 
            color="#9b87f5" 
            emissive="#6E59A5"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
        <Text3D
          position={[0, -2.5, 0]}
          font="/fonts/inter_bold.json"
          size={2}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Meets Excellence
          <meshStandardMaterial 
            color="#9b87f5" 
            emissive="#6E59A5"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
};

export const HeroText3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[5, 5, 20]} angle={0.15} penumbra={1} intensity={1} />
        <Text3DModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
