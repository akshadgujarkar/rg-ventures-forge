
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Models for each service
const ModelTypes = {
  ELECTRICAL: 'electrical',
  RENEWABLE: 'renewable',
  TECHNICAL: 'technical',
  MARKETING: 'marketing',
  FABRICATION: 'fabrication',
  CONSULTATION: 'consultation',
};

// Simple placeholder models
const ElectricalModel = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9b87f5" />
      <group position={[0, 0.7, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.3, 16]} />
          <meshStandardMaterial color="#6E59A5" />
        </mesh>
      </group>
    </mesh>
  );
};

const RenewableModel = () => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={mesh}>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
          <mesh position={[0, 2, 0]}>
            <boxGeometry args={[0.6, 0.1, 0.2]} />
            <meshStandardMaterial color="#9b87f5" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const TechnicalModel = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={mesh}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.2]} />
        <meshStandardMaterial color="#9b87f5" />
      </mesh>
    </group>
  );
};

const MarketingModel = () => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={mesh}>
      <mesh>
        <boxGeometry args={[1, 1.5, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#9b87f5" />
      </mesh>
      <mesh position={[0, -0.5, 0.15]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#6E59A5" />
      </mesh>
    </group>
  );
};

const FabricationModel = () => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={mesh}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.4, 1.5]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#9b87f5" />
      </mesh>
    </group>
  );
};

const ConsultationModel = () => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <group ref={mesh}>
      <mesh>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#6E59A5" />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <coneGeometry args={[0.3, 0.5, 16]} />
        <meshStandardMaterial color="#9b87f5" />
      </mesh>
    </group>
  );
};

const Model = ({ type }: { type: string }) => {
  switch (type) {
    case ModelTypes.ELECTRICAL:
      return <ElectricalModel />;
    case ModelTypes.RENEWABLE:
      return <RenewableModel />;
    case ModelTypes.TECHNICAL:
      return <TechnicalModel />;
    case ModelTypes.MARKETING:
      return <MarketingModel />;
    case ModelTypes.FABRICATION:
      return <FabricationModel />;
    case ModelTypes.CONSULTATION:
      return <ConsultationModel />;
    default:
      return null;
  }
};

// Scene configuration
function Scene({ models }: { models: { type: string; position: [number, number, number] }[] }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 2, 10);
  }, [camera]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      {models.map((model, index) => (
        <group key={index} position={model.position}>
          <Model type={model.type} />
        </group>
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export const ServicesModels = () => {
  const [models, setModels] = useState<{ type: string; position: [number, number, number] }[]>([]);
  
  useEffect(() => {
    // Position models in a circular pattern
    const modelTypes = [
      ModelTypes.ELECTRICAL,
      ModelTypes.RENEWABLE,
      ModelTypes.TECHNICAL, 
      ModelTypes.MARKETING,
      ModelTypes.FABRICATION,
      ModelTypes.CONSULTATION
    ];
    
    const radius = 8;
    const newModels = modelTypes.map((type, i) => {
      const angle = (i / modelTypes.length) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      return {
        type,
        position: [x, 0, z] as [number, number, number]
      };
    });
    
    setModels(newModels);
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas>
        <Scene models={models} />
      </Canvas>
    </div>
  );
};
