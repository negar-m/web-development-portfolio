let itemInput = document.getElementById('itemInput')
let addButton = document.getElementById('addButton');
let clearButton = document.getElementById('clearButton');
let todoListUl = document.getElementById('todoList');
let completeButton = document.querySelector('.btn-success')
let deleteButton = document.querySelector('.btn-danger')
let todoArray = []

function addNewTodo(){
         
        let newTodoTitle = itemInput.value
        let newTodoObject ={
            id : todoArray.length +1,
            title: newTodoTitle,
            complete : false
        }
        
        todoArray.push(newTodoObject)
        todoGenarator(todoArray)
        setLocalStorage(todoArray)
        itemInput.value =''
        itemInput.focus()
    
}

function setLocalStorage(todolist){
    localStorage.setItem('todos', JSON.stringify(todolist))
}
function getLocalStorage(){
    let localStorageTodo = JSON.parse(localStorage.getItem('todos'))
    if(localStorageTodo){
        todoArray = localStorageTodo
    }else{
        todoArray = []
    }
    todoGenarator(todoArray)
}

function todoGenarator(todolist){

    todoListUl.innerHTML =''
    todolist.forEach(function (todo){
        let newTodoli =document.createElement('li')
        let completeBtn =document.createElement('button')
        let deleteBtn = document.createElement('button')
        let label = document.createElement('label')
        newTodoli.classList = 'completed well'
        completeBtn.classList = 'btn btn-success'
        completeBtn.innerHTML = 'Complete'
        completeBtn.setAttribute('onclick', 'editTodo(' + todo.id + ')')
        deleteBtn.classList = 'btn btn-danger'
        deleteBtn.setAttribute('onclick','removeItem('+ todo.id +')')
        deleteBtn.innerHTML = 'Delete'
        label.innerHTML = todo.title
        newTodoli.append(label, completeBtn, deleteBtn)
        console.log(newTodoli)
        todoListUl.append(newTodoli)
        if(todo.complete){
        newTodoli.classList = 'uncompleted well'
        completeBtn.innerHTML = 'UnComplete'
        }
        
    })
}

function removeItem(todoId){

    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todoArray = localStorageTodos
    let mainIndexTodo =todoArray.findIndex(function(todo){
        return todo.id === todoId
    })
    console.log(mainIndexTodo)
    todoArray.splice(mainIndexTodo, 1)
    setLocalStorage(todoArray)
    todoGenarator(todoArray)
}

function editTodo(todoId){
    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    todoArray = localStorageTodos
    todoArray.forEach(function(todo){
        if (todo.id === todoId){
            todo.complete = !todo.complete
        }
    })
    setLocalStorage(todoArray)
    todoGenarator(todoArray)

}
function clearTodos(){
    todoArray = []
    todoGenarator(todoArray)
    localStorage.removeItem('todos')
}
addButton.addEventListener('click',addNewTodo)
// window.onload = getLocalStorage()
window.addEventListener('load',getLocalStorage)
deleteButton.addEventListener('click',clearTodos)
itemInput.addEventListener('keydown',function(e) {
    if (e.code === 'Enter'){
        addNewTodo()
    }
})