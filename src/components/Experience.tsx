import React from "react";
import { OrbitControls, Center, useGLTF, useTexture } from "@react-three/drei";

const Experience: React.FC = (): JSX.Element => {
  const model = useGLTF("../model/portal.glb");
  const bakedTexture = useTexture("../model/baked.jpg");

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
        ></mesh>
      </Center>
    </>
  );
};

export default Experience;
