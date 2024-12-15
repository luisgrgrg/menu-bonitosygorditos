
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 const Model3d = (props)=> {
  const { nodes, materials } = useGLTF('../../public/models/free_pack_-_chibi_base_mesh_rigged.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.BaseMesh_Chibi_M}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert1}
          skeleton={nodes.Object_9.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('../../public/models/free_pack_-_chibi_base_mesh_rigged.glb')

export default Model3d; 