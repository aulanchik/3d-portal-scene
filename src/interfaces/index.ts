import * as THREE from "three";
import { GLTF } from "three-stdlib";

interface ModelGLTF extends GLTF {
    nodes: {
        baked: THREE.Mesh;
        portalLight: THREE.Mesh;
        poleLightA: THREE.Mesh;
        poleLightB: THREE.Mesh;
    };
}

export type { ModelGLTF }
