const CHARS = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CHARS.A + index)
}

export function createTable(rowsCount = 50) {
  const colsCount = CHARS.Z - CHARS.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toCol)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(toCell).join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
