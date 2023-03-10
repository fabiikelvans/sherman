/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MADE.COM (https://sketchfab.com/made-it)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/esme-coffee-table-with-2-drawers-white-and-ash-66943d6d54064452b5ecb9151dcc181c
title: Esme Coffee Table With 2 Drawers, White And Ash
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Plane001_FLOOR_0.geometry} material={materials.FLOOR} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, 22.58, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.17, 1, 1.17]}>
        <group position={[-74.28, 10, 70.22]}>
          <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_WHITE_0.geometry} material={materials.WHITE} />
          <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_ASH_0.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
