import { newFactorial } from "./factorial.js"
import factorialModule from "./factorial.wasm"

// locateFile is required because webpack will change the name of the wasm file
const wasm = newFactorial({
  locateFile(path) {
    if (path.endsWith(`.wasm`)) {
      return factorialModule
    }
    return path
  },
})

export default wasm
