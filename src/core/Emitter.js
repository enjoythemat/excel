export class Emitter {
  constructor() {
    this.listeners = {}
  }

  dispatch(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(func => func(...args))
    return true
  }

  subscribe(event, func) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(func)
    return () => {
      this.listeners[event] = this.listeners[event].filter(el => el !== func)
    }
  }
}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('Event', data => console.log('Sub: ', data))

// emitter.dispatch('event:name', 'data'

// unsub()
