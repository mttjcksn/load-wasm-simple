# load-wasm-simple
Simple example of loading wasm with typescript, react, and webpack.


## simple-wasm-pkg 
(Requires emscripten SDK and cmake)
A minimal emscripten cmake project to produce a wasm package for use with the associated simple-wasm-loader.


## simple-wasm-loader
(Requires node, npm)
A minimal typescript, react and webpack web app that loads the above package.
The simple-wasm-package output files are already in src/wasm-pkg.  
All you need to run is run `npm i` and then `npm run dev` in the root simple-wasm-loader folder.

This is bascially a stripped-down version of this example: https://github.com/9oelM/emscripten-cplusplus-webpack-example
Refer to the above example for specifics.