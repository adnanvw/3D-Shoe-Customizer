import React from 'react'
import { useSnapshot } from 'valtio'
import state from "../store.js"
import { HexColorPicker } from 'react-colorful'

const ColorPickers = () => {
  const snap = useSnapshot(state)

  // console.log("snap",snap.current)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
    </div>

  )
}

export default ColorPickers