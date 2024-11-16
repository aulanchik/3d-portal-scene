import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components";
import "./styles.css";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <Canvas
    flat
    camera={{
      fov: 75,
      near: 0.1,
      far: 100,
      position: [2, 4, 6],
    }}
  >
    <Experience />
  </Canvas>,
);
