import React from "react";
import * as THREE from 'three';
import { OrbitControls, Center, useGLTF, useTexture, Sparkles } from "@react-three/drei";
import { GLTF } from 'three-stdlib';

interface ModelGLTF extends GLTF {
  nodes: {
    baked: THREE.Mesh;
    portalLight: THREE.Mesh;
    poleLightA: THREE.Mesh;
    poleLightB: THREE.Mesh;
  };
}

const isModelGLTF = (gltf: any): gltf is ModelGLTF => {
  return (
    gltf && gltf.nodes &&
    'baked' in gltf.nodes &&
    'portalLight' in gltf.nodes &&
    'poleLightA' in gltf.nodes &&
    'poleLightB' in gltf.nodes
  );
};

const Experience: React.FC = () => {
  const gltf = useGLTF("../model/portal.glb");
  const texture = useTexture("../model/baked.jpg");

  const pastelYellow = "#ffffe5";

  if (!isModelGLTF(gltf)) {
    return <div>Loading...</div>
  }

  return (
    <>
      <OrbitControls makeDefault autoRotate />
      <Center>
        <mesh geometry={gltf.nodes.baked.geometry} position={gltf.nodes.baked.position} rotation={gltf.nodes.baked.rotation} scale={gltf.nodes.baked.scale}>
          <meshBasicMaterial map={texture} map-flipY={false} />
        </mesh>

        <mesh geometry={gltf.nodes.poleLightA.geometry} position={gltf.nodes.poleLightA.position} rotation={gltf.nodes.poleLightA.rotation} scale={gltf.nodes.poleLightA.scale}>
          <meshBasicMaterial color={pastelYellow} />
        </mesh>

        <mesh geometry={gltf.nodes.poleLightB.geometry} position={gltf.nodes.poleLightB.position} rotation={gltf.nodes.poleLightB.rotation} scale={gltf.nodes.poleLightB.scale}>
          <meshBasicMaterial color={pastelYellow} />
        </mesh>

        <mesh geometry={gltf.nodes.portalLight.geometry} position={gltf.nodes.portalLight.position} rotation={gltf.nodes.portalLight.rotation} scale={gltf.nodes.portalLight.scale} />

        <Sparkles size={10} scale={[5, 1, 7]} position-y={1} speed={0.5} color={pastelYellow} />
      </Center>
    </>
  );
};

export default Experience;
