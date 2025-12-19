let addBtn = document.querySelector('#add_btn')
let todoSubmit = document.querySelector('#todo_submit')
let todoInput = document.querySelector('#todo_input')
let modal = document.querySelector('.modal')
let status = document.querySelector('.status')
let closeModal = document.querySelector('.close-modal')

function dragstart(event){
    console.log('dragstart')
    event.dataTransfer.setData('todoElem',event.target.id)
}
function drop(event){
    console.log('drop')
    event.preventDefault()
    let targetId= event.dataTransfer.getData('todoElem')
    let targetElem = document.getElementById(targetId)
    event.target.append(targetElem)
    console.log(targetId)
    console.log(targetElem)
}
function dragOver(event){
    console.log('over')
    event.preventDefault()
}
addBtn.addEventListener('click',function(event){
    modal.classList.add('active')
})
closeModal.addEventListener('click',function(event) {
    modal.classList.remove('active')
})

todoSubmit.addEventListener('click',function(event) {
  
    let newDiv = document.createElement('div')
    newDiv.classList = 'todo'
    newDiv.setAttribute('draggable', 'true')
    newDiv.setAttribute('id', 'todoInput.value')
    newDiv.addEventListener('dragstart',dragstart)
    newDiv.innerHTML = todoInput.value
    
    let newSpan = document.createElement('span')
    newSpan.innerHTML = '&times;'
    newSpan.classList = 'close'
    newDiv.appendChild(newSpan)
    status.appendChild(newDiv)
    newSpan.addEventListener('click',function(event) {
        event.target.parentElement.remove()
    })

    todoInput.value =''
    modal.classList.remove('active')
})