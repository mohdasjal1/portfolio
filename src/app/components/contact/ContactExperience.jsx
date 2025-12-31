"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
      <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
        <ambientLight intensity={0.5} color="#f0f9ff" />

        <directionalLight
          position={[5, 5, 3]}
          intensity={2.5}
          color="#7dd3fc"
        />

        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#7dd3fc"
        />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={false}
        />

        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#374151" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;