import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import ColorPickers from './Components/ColorPickers'
import ShoeModel from './Components/ShoeModel'
import { useSnapshot } from 'valtio'
import state from './store'
import "./App.css"
import StarsComp from './Components/StarsComp'

const App = () => {

  const snap = useSnapshot(state)

  const handleSelectChange = (e) => {
    state.current = e.target.value
  }

  return (
    <>
      <Canvas style={{ background: 'linear-gradient(to bottom, #e1e1e1 -15%, black 40%)', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        {/* Other 3D elements */}
        <StarsComp />
      </Canvas>
    <div id="canvas-container">
      <div >
        <div id="customization-section">
          <h2>Shoe Customiser</h2>
          <label>
            Select Part:
            <select onChange={handleSelectChange}>
              {Object.keys(snap.items).map((item) => (
                <option key={item} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <ColorPickers />
        </div>
      </div>
      <div id="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <ShoeModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>

      </div>


    </div>
    </>

  )
}

export default App