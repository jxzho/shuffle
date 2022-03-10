import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/use.min.js',
    format: 'cjs',
    sourcemap: 'inline',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
}