import React, { useEffect, useState } from "react"
import FactorialWasmPromise from "@mj/factorial-wasm"

export function App() {
  const [factorialResult, setFactorialResult] = useState<null | number>(null)

  var factWasm:any;

  useEffect(() => {
    async function loadAndRunWasm() {
      factWasm = await FactorialWasmPromise
      wasmReady();
    }
    loadAndRunWasm()
  }, [])

  
    function wasmReady() {
      setFactorialResult(factWasm._factorial(5))
    }

    return (
      <div>{factorialResult}</div>
          
    )
}
