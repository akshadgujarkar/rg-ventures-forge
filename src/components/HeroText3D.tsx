
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
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
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <Center position={[0, 0.5, 0]}>
        <Text3D
          ref={textRef}
          font="/fonts/inter_bold.json"
          size={1.5}
          height={0.4}
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
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </Text3D>
        <Text3D
          position={[0, -2, 0]}
          font="/fonts/inter_bold.json"
          size={1.5}
          height={0.4}
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
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </Text3D>
      </Center>
    </Float>
  );
};

export const HeroText3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
        <spotLight position={[5, 5, 15]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <Text3DModel />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
};
