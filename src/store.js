import { proxy } from "valtio"

const state = proxy({
    current: null,
    items: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" },
  })

export default state