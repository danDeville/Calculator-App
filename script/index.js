const borrar = () => {
  var screen = document.getElementById('pantalla').value
  document.getElementById('pantalla').value = screen.substr(0, value.length - 1)
}

let layout = document.querySelector('body')
let handleStyle = document.getElementById('modos-control_indicador')

let mediumMode = document.getElementById('medium-mode')
mediumMode.addEventListener('click', () => {
  layout.classList.add('active-theme-2')
  layout.classList.remove('active-theme-3')
  handleStyle.style.left = '40%'
})

let firstMode = document.getElementById('first-mode')
firstMode.addEventListener('click', () => {
  layout.classList.remove('active-theme-2')
  layout.classList.remove('active-theme-3')
  handleStyle.style.left = '0%'
})

let lastMode = document.getElementById('last-mode')
lastMode.addEventListener('click', () => {
  layout.classList.add('active-theme-3')
  layout.classList.remove('active-theme-2')
  handleStyle.style.left = '80%'
})
