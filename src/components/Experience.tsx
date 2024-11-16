import React, { useRef } from "react";
import * as THREE from "three";
import {
  Sparkles,
  OrbitControls,
  Center,
  useGLTF,
  useTexture,
  shaderMaterial,
} from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import vertexShader from "../shaders/portal/vertex.glsl";
import fragmentShader from "../shaders/portal/fragment.glsl";

const PortalMaterial: any = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ff0000"),
    uColorEnd: new THREE.Color("#ff00ff"),
  },
  fragmentShader,
  vertexShader,
);

extend({ PortalMaterial });

const Experience: React.FC = (): JSX.Element => {
  const model = useGLTF("../model/portal.glb");
  const bakedTexture = useTexture("../model/baked.jpg");

  const portalMaterial = useRef<typeof PortalMaterial>();

  useFrame((delta) => {
    if (portalMaterial.current) {
      portalMaterial.current.uTime += delta;
    }
  });

  const pastelYellow = "#ffffe5";
  const { baked, portalLight, poleLightA, poleLightB } = model.nodes;

  return (
    <>
      <color args={["#201919"]} attach="background" />
      <OrbitControls makeDefault autoRotate />
      <Center>
        {/* Scene */}
        <mesh
          geometry={(baked as any).geometry}
          position={baked.position}
          rotation={baked.rotation}
          scale={baked.scale}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>

        {/* Left Pole Light */}
        <mesh
          geometry={(poleLightA as any).geometry}
          position={poleLightA.position}
          rotation={poleLightA.rotation}
          scale={poleLightA.scale}
        >
          <meshBasicMaterial color={pastelYellow} />
        </mesh>

        {/* Right Pole Light */}
        <mesh
          geometry={(poleLightB as any).geometry}
          position={poleLightB.position}
          rotation={poleLightB.rotation}
          scale={poleLightB.scale}
        >
          <meshBasicMaterial color={pastelYellow} />
        </mesh>

        {/* Portal */}
        <mesh
          geometry={(portalLight as any).geometry}
          position={portalLight.position}
          rotation={portalLight.rotation}
          scale={portalLight.scale}
          ref={portalMaterial}
        />

        {/* Fireflies */}
        <Sparkles
          size={10}
          scale={[5, 1, 7]}
          position-y={1}
          speed={0.5}
          color={pastelYellow}
        />
      </Center>
    </>
  );
};

export default Experience;
