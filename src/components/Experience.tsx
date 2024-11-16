import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <color args={["#201919"]} attach={"background"} />
      <OrbitControls makeDefault autoRotate />
      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Experience;
