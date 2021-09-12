import { DOMListener } from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }

  // Настройка компонента до init()
  prepare() {}

  // Шаблон компонента
  toHTML() {
    return ''
  }

  // Уведомление слушателя о событии event
  $dispatch(event, ...args) {
    this.emitter.dispatch(event, ...args)
  }

  // Подписка на событие event
  $on(event, func) {
    const unsub = this.emitter.subscribe(event, func)
    this.unsubscribers.push(unsub)
  }

  // Инициализация компонента и слушателей
  init() {
    this.initDOMListeners()
  }

  // Очистка
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
