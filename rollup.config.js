import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/xio-shuffle.js',
    format: 'es',
    sourcemap: 'inline',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
}