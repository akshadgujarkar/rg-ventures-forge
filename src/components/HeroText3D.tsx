
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
      speed={1.3} 
      rotationIntensity={0.4} 
      floatIntensity={0.3}
    >
      <Center position={[0, 0, 0]}>
        <Text3D
          ref={textRef}
          font="/fonts/inter_bold.json" 
          size={1.8}
          height={0.5}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.04}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={6}
        >
          RG Ventures
          <meshStandardMaterial 
            color="#9b87f5" 
            emissive="#6E59A5"
            emissiveIntensity={1.2}
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}   
          />
        </Text3D>
      </Center>
    </Float>
  );
};

export const HeroText3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={40} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} castShadow />
        <spotLight position={[5, 5, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
        <Text3DModel />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.3}
          maxPolarAngle={Math.PI / 2 + 0.3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
