let container =  document.querySelector('.container')
let inputElem = document.getElementById('range')

inputElem.addEventListener('change', function(event){
   container.style.filter = 'brightness('+event.target.value+'%)'
   console.log(event.target.value)
   console.log(event.target)
})

