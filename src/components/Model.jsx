/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useRef, useEffect, forwardRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

const Model = forwardRef((props, ref) => {
  const { scene, animations } = useGLTF("/src/assets/bee2.glb");
  const mixer = useRef(null); // Initialize a reference for the mixer
  console.log({ ref });

  // Set up the animation mixer and play the second animation in the animation array
  useEffect(() => {
    if (animations && animations.length > 0) {
      // Create a new mixer for the given scene and set the second animation to play
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[1]);
      // Play the animation
      action.play();
    }

    // Clean up the mixer on unmount
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [animations, scene]);

  // Update the animation frame by frame by delta interval
  useFrame((state, delta) => {
    // Update the animation mixer with the current delta interval so our bees  wings can flutter at delta intervals
    if (mixer.current) mixer.current.update(delta);
    if (ref.current) {
      const { position, rotation } = props.state;
      console.log({ position, rotation });

      // Set the position and rotation based on the passed state
      if (ref.current) {
        gsap.to(ref.current.position, {
          x: position.x,
          y: position.y,
          z: position.z,
          duration: 3,
          ease: "power1.out",
        });

        gsap.to(ref.current.rotation, {
          x: rotation.x,
          y: rotation.y,
          z: rotation.z,
          duration: 3,
          ease: "power1.out",
        });
      }
    }
  });

  return (
    <>
      {/* The 3D model group */}
      <group ref={ref}>
        <primitive object={scene} />
      </group>
    </>
  );
});

export default Model;

// Preload the model to optimize performance
useGLTF.preload("/src/assets/bee2.glb");
