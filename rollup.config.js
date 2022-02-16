import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from "rollup-plugin-dts";
import svgr from '@svgr/rollup'
import packageJson from './package.json'

export default [
{
  input: 'src/main.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      exports: 'named',
      sourcemap: true
    },
    {
      format: 'es',
      file: packageJson.module,
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    external(),
	svgr({typescript: true}),
    commonjs({
      include: ['node_modules/**'],
    }),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      exclude: ['node_modules'],
    }),
  ]
},
{
    // path to your declaration files root
    input: './src/main.d.ts',
    output: [{ file: packageJson.typings, format: 'es' }],
    plugins: [
		svgr({typescript: true}),
		dts()],
  },
]
