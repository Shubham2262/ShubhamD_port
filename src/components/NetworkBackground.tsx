import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00e6e6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingSphere({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[scale, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.5, 0.05, 16, 100]} />
      <meshBasicMaterial color="#b464ff" transparent opacity={0.4} />
    </mesh>
  );
}

function GridPlane() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <gridHelper 
      args={[50, 50, '#00e6e6', '#1a1a3e']} 
      rotation={[Math.PI / 2, 0, 0]} 
      position={[0, -5, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00e6e6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b464ff" />
      
      <FloatingParticles />
      
      <GlowingSphere position={[-4, 2, -5]} color="#00e6e6" scale={1.2} />
      <GlowingSphere position={[4, -2, -8]} color="#b464ff" scale={0.8} />
      <GlowingSphere position={[0, 3, -10]} color="#00e6e6" scale={1.5} />
      
      <FloatingTorus position={[3, 1, -6]} />
      <FloatingTorus position={[-3, -1, -4]} />
      
      <GridPlane />
      
      <fog attach="fog" args={['#080c15', 5, 30]} />
    </>
  );
}

const NetworkBackground = () => {
  return (
    <div className="fixed inset-0 z-0" style={{ background: 'linear-gradient(180deg, hsl(222 47% 3%) 0%, hsl(222 47% 8%) 50%, hsl(260 40% 10%) 100%)' }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
