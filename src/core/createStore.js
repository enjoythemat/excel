export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  const listeners = []
  return {
    subscribe(func) {
      listeners.push(func)
      return {
        unsubscribe() {
          listeners.filter(l => l !== func)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}
