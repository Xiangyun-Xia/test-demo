import Vue from 'vue'

export const applyState = (target: any, ...args: any[]) => {
  const state = args.reduce((states, arg) => Object.assign(states, arg), {})
  Object.keys(state).map((key) => Vue.set(target, key, state[key]))
}

export const applySet = () => {
  Vue.set.apply(Vue, arguments)
}

export default {}
