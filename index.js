const form = document.querySelector('.form')
const form__input = document.querySelector('.form__input')
const form__submit = document.querySelector('.form__submit')
const item_template = document.querySelector('.item_template')
const list = document.querySelector('.list')

let editedItem = null;

form.addEventListener('submit', e => {
  e.preventDefault()

  const newItem = item_template
    .content
    .cloneNode(true)
    .querySelector('.list__item')

  const itemText = newItem.querySelector('.item__text')
  const deleteButton = newItem.querySelector('.delete')

  deleteButton.addEventListener('click', e => {
    e.currentTarget.closest('.list__item').remove()
  })

  itemText.textContent = form__input.value

  list.insertAdjacentElement('beforeend', newItem)
  form__input.value = ''


})
