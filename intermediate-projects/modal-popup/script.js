let modalDiv = document.querySelector('.modal-parent')
let xElem = document.querySelector('.X')
let btn = document.querySelector('button')
let section = document.querySelector('section')

function showModal(){
    modalDiv.style.display = 'block'
    section.style.filter= 'blur(10px)'
}
function hideModal() {
    modalDiv.style.display = 'none'
    section.style.filter= 'blur(0px)'
}

btn.addEventListener('click',showModal)
xElem.addEventListener('click',hideModal)
document.body.addEventListener('keydown',function(e) {
    if (e.key=== 'Escape'){
        hideModal()
    }
})