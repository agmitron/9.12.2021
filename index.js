const items = [
  'умыться',
  'почистить зубы'
]

const form = document.querySelector('.form')
const form__input = document.querySelector('.form__input')
const form__submit = document.querySelector('.form__submit')
const item_template = document.querySelector('.item_template')
const list = document.querySelector('.list')

function render() {
  items.forEach(renderItem)
}

function duplicate(index) {
  const children = list.querySelectorAll('.list__item')

  const copy = children[index]

  console.log(copy.nextSibling)

  if (copy.nextSibling) {
    list.insertBefore(copy.cloneNode(true), copy.nextSibling)
  } else {
    list.append(copy.cloneNode(true))
  }
}

function renderItem(text, index) {
  const newItem = item_template
    .content
    .cloneNode(true)
    .querySelector('.list__item')

  const itemText = newItem.querySelector('.item__text')
  const deleteButton = newItem.querySelector('.delete')
  const duplicateButton = newItem.querySelector('.duplicate')

  itemText.textContent = text

  deleteButton.addEventListener('click', e => {
    e.currentTarget.closest('.list__item').remove()
  })

  duplicateButton.addEventListener('click', () => {
    duplicate(index)
  })

  list.insertAdjacentElement('beforeend', newItem)
}

form.addEventListener('submit', e => {
  e.preventDefault()

  renderItem(form__input.value)

  form__input.value = ''
})

render()
