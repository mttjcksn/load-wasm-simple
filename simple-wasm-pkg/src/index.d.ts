export interface FactorialInterface {
  _factorial(a: number): number;
}

export declare const FactorialWasmPromise: Promise<FactorialInterface>;

export default FactorialWasmPromise