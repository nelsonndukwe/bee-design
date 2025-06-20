/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { forwardRef, Suspense } from "react";
import Model from "./Model";

const Scene = forwardRef((props, ref) => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 70,
        near: 0.01,
        far: 1000,
        aspect: window.innerWidth / window.innerHeight,
        // camera position in the x,rotateY, and z axis
        position: [0, 0, 25],
      }}
    >
      <ambientLight color={0xffffff} intensity={1.9} />
      <directionalLight
        color={0xffffff}
        intensity={1}
        position={[500, 500, 500]}
      />
      <Suspense fallback={null}>
        <Model ref={ref} state={props.state} />
      </Suspense>
    </Canvas>
  );
});

Scene.displayName = "Scene";

export default Scene;
