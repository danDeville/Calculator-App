const borrar = () => {
  var value = document.getElementById('pantalla').value
  document.getElementById('pantalla').value = value.substr(0, value.length - 1)
}

let two = document.getElementById('two')
two.addEventListener('click',function(){
  let body = document.querySelector('body')
  body.classList.add('active-theme-1')
})

let one = document.getElementById('one')
one.addEventListener('click',function(){
  let body = document.querySelector('body')
  body.classList.remove('active-theme-1')
  body.classList.remove('active-theme-2')
})

let three = document.getElementById('three')
three.addEventListener('click',function(){
  let body = document.querySelector('body')
  body.classList.add('active-theme-2')
  body.classList.remove('active-theme-1')
})