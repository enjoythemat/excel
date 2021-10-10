import {storage} from '@core/utils'

function toHTML(key) {
  const model = storage(key)
  return `<li class="db__record">
            <a href="#excel/${key.split(':')[1]}">${model.title}</a>
            <strong>
              ${new Date(model.openedDate).toLocaleDateString()}
              ${new Date(model.openedDate).toLocaleTimeString()}
            </strong>
          </li>`
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes('excel')) {
      keys.push(localStorage.key(i))
    }
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()

  if (!keys.length) {
    return `<p>Созданных таблиц не существует</p>`
  }

  return `<div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
          </div>

          <ul class="db__list">
            ${keys.map(toHTML).join('')}
          </ul>`
}
