export type PluginBuilder<I, A1 = undefined, A2 = undefined, A3 = undefined, A4 = undefined> = (arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4) => Plugin<I>

export interface Context {
  test: (typeof it | typeof it.skip)
  plugins: {[k: string]: PluginBuilder<any, any, any, any, any>}
  expectation?: string
  chain: Plugin<any>[]
  error?: Error & {code?: string}
}

export interface Plugin<I> {
  run?(context: I): any
  init?(context: I): any
  finally?(context: I): any
  catch?(context: I): any
}

export interface PluginDef {
  output: object
  a1: any
  a2: any
  a3: any
  a4: any
}

export interface Plugins {[k: string]: PluginDef}

export type Base<I extends Context, T extends Plugins> = {
  it: {
    (expectation: string, cb?: (context: I) => any): void
    (cb?: (context: I) => any): void
  }
  end: {
    (expectation: string, cb?: (context: I) => any): void
    (cb?: (context: I) => any): void
  }
  add<K extends string, O>(key: K, cb: (context: I) => Promise<O> | O): Base<I & {[P in K]: O}, T>
  do<O>(cb: (context: I & O) => any): Base<O & I, T>
  finally(cb: (context: I) => any): Base<I, T>
  register<K extends string, O, A1, A2, A3, A4>(key: K, plugin: (arg1?: A1, arg2?: A2, arg3?: A3, arg4?: A4) => Plugin<O & I>): Base<I, T & {[P in K]: {output: O, a1: A1, a2: A2, a3: A3, a4: A4}}>
} & {[P in keyof T]: (arg1?: T[P]['a1'], arg2?: T[P]['a2'], arg3?: T[P]['a3'], arg4?: T[P]['a4']) => Base<T[P]['output'] & I, T>}

export interface EnvOptions {
  clear?: boolean
}

export interface Env extends Plugin<{envs: (typeof process.env)[]}> {}
