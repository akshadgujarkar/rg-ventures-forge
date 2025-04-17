
import React, { useRef, useEffect } from 'react';
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
      rotationIntensity={0.4} 
      floatIntensity={0.4}
    >
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/inter_bold.json"
          size={1.8}
          height={0.4}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0, 0, 0]}
        >
          Industrial Innovation
          <meshStandardMaterial 
            color="#9b87f5" 
            emissive="#6E59A5"
            emissiveIntensity={0.8}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
        <Text3D
          position={[0, -2.2, 0]}
          font="/fonts/inter_bold.json"
          size={1.8}
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
            emissiveIntensity={0.8}
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
    <div className="w-full h-[500px] md:h-[600px] relative bg-opacity-0">
      <Canvas shadows dpr={[1, 2]} className="!touch-none">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <spotLight position={[5, 5, 15]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
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
