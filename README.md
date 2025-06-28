# 3D Portal Scene

This repository contains an interactive 3D scene featuring a mysterious, glowing portal. The project is built with React, Three.js, and React Three Fiber, and it showcases the use of custom GLSL shaders to create a dynamic, animated portal effect. The environment uses baked lighting for realistic and performant visuals.

## Features
- **Interactive 3D Scene**: Navigate the scene using orbit controls (drag to rotate, scroll to zoom).
- **Custom GLSL Shaders**: The portal's mesmerizing, fiery appearance is generated using custom vertex and fragment shaders.
- **Animated Portal**: The portal effect is animated using Perlin noise and a time uniform, creating a constantly shifting and flowing visual.
- **Baked Lighting**: The main scene model uses a baked texture map for efficient and high-quality lighting and shadows.
- **Particle Effects**: The scene is enhanced with `Sparkles` from React Three Drei for added ambiance.
- **Vite-Powered**: Fast development and builds are enabled by Vite, with plugins for GLSL and React support.

## Technologies Used
- **Framework**: React
- **3D Rendering**: Three.js, React Three Fiber (`@react-three/fiber`)
- **3D Helpers & Components**: React Three Drei (`@react-three/drei`)
- **Shaders**: GLSL
- **Build Tool**: Vite
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- pnpm, npm, or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/aulanchik/3d-portal-scene.git
   ```
2. Navigate to the project directory:
   ```sh
   cd 3d-portal-scene
   ```
3. Install the dependencies:
   ```sh
   pnpm install
   ```

### Running the Project
- **Development Mode**: To start the development server with hot-reloading:
  ```sh
  pnpm dev
  ```
  Open your browser to `http://localhost:5173`.

- **Build for Production**: To create an optimized production build:
  ```sh
  pnpm build
  ```
  The output files will be in the `dist/` directory.

- **Preview Production Build**: To preview the production build locally:
  ```sh
  pnpm preview
  ```
