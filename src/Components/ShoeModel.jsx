import { useGLTF } from '@react-three/drei'
import React, { Suspense } from 'react'
import Loader from './ModelLoader'
import { useSnapshot } from 'valtio'
import state from "../store.js"

const ShoeModel = () => {
  const { nodes, materials } = useGLTF("../../public/shoe.gltf")
  const snap = useSnapshot(state)

  return (
    <Suspense fallback={<Loader />}>
      <group dispose={null} scale={1}>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
      </group>
    </Suspense>

  )
}

useGLTF.preload('../../public/shoe.gltf')

export default ShoeModel