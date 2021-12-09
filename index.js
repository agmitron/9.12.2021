const form = document.querySelector('.form')
const form__input = document.querySelector('.form__input')
const item_template = document.querySelector('.item_template')
const list = document.querySelector('.list')


form.addEventListener('submit', e => {
  e.preventDefault()

  const newItem = item_template
    .content
    .cloneNode(true)
    .querySelector('.list__item')

  newItem.querySelector('.item__text').textContent = form__input.value

  list.insertAdjacentElement('beforeend', newItem)
})
