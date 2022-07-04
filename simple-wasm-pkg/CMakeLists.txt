cmake_minimum_required (VERSION 3.8)

project ("wasmFactorial")

add_executable(factorial)
add_subdirectory(src)

target_include_directories(factorial PUBLIC "${CMAKE_SOURCE_DIR}")
set_target_properties(factorial PROPERTIES COMPILE_FLAGS "-O3 -o ./factorial.js")
set_target_properties(factorial PROPERTIES LINK_FLAGS " -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' -s ALLOW_MEMORY_GROWTH=1 -s MODULARIZE=1 -s EXPORT_NAME='newFactorial' -s EXPORTED_FUNCTIONS=['_factorial'] -s ENVIRONMENT='web' ")

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_BINARY_DIR}/factorial.js
            ${CMAKE_SOURCE_DIR}/output/factorial.js
)

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_BINARY_DIR}/factorial.wasm
            ${CMAKE_SOURCE_DIR}/output/factorial.wasm
)

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/src/${CMAKE_TARGET}/index.js
            ${CMAKE_SOURCE_DIR}/output/index.js
)

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/src/${CMAKE_TARGET}/index.d.ts
            ${CMAKE_SOURCE_DIR}/output/index.d.ts
)

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/src/${CMAKE_TARGET}/package.json
            ${CMAKE_SOURCE_DIR}/output/package.json
)

add_custom_command(
    TARGET factorial POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/src/${CMAKE_TARGET}/tsconfig.json
            ${CMAKE_SOURCE_DIR}/output/tsconfig.json
)