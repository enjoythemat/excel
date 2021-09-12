const CHARS = {
  A: 65,
  Z: 90
}

function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        data-type="cell"
        data-col="${col}" 
        data-id="${row}:${col}" 
        contenteditable
      ></div>
    `
  }
}

function toCol(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${index ? '<div class="row-resize" data-resize="row"></div>' : ''}
      </div>
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
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(i))
        .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
