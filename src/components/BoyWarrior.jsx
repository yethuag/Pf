import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function BoyWarrior(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/bw.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(0);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(0);
  }, [ySpring]);

  // Update position on each frame
  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      // Allow external rotation to be applied here
      scale={props.scale || 1.2}
      position={props.position || [0, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        {/* Apply base model orientation here */}
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            {/* Fine-tune facing direction */}
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube_52"
                position={[0.176, 0.206, -0.078]}
                rotation={[3.066, 0.633, 0.397]}
                scale={0.653}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Sword}
                />
              </group>
              <group name="rig_388">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.material_0}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <group name="Cube001_387" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bw.glb");
