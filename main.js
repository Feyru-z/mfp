const input = document.querySelector('.text-field')
input.addEventListener('keydown', (e) => {
  if (Number.isNaN(Number(e.key))) {
    console.log('Кнопка нажата')
  }
})
