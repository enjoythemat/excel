function toButton(button) {
  return `
    <div 
      class="button ${button.active ? 'active' : ''}" 
      data-type="btn"
      data-value='${JSON.stringify(button.value)}'
    >
      <span 
        data-type="btn" 
        class="material-icons"
        data-value='${JSON.stringify(button.value)}'
      >
        ${button.icon}
      </span>
    </div>
  `
}

export function createToolbar(state) {
  const buttons = [
    {
      icon: 'format_align_left',
      active: state['textAlign'] === 'left',
      value: {textAlign: 'left'}
    },
    {
      icon: 'format_align_center',
      active: state['textAlign'] === 'center',
      value: {textAlign: 'center'}
    },
    {
      icon: 'format_align_right',
      active: state['textAlign'] === 'right',
      value: {textAlign: 'right'}
    },
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      icon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      icon: 'format_underline',
      active: state['textDecoration'] === 'underline',
      value: {
        textDecoration: state['textDecoration'] === 'underline'
        ? 'none'
        : 'underline'
      }
    }
  ]
  return buttons.map(toButton).join('')
}
