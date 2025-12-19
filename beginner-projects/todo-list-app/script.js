let input = document.querySelector('input')
let ul = document.querySelector('.todos')


function addNewToDo(newToDo){
    let newToDoLi = document.createElement("li")
    newToDoLi.className ='list-group-item d-flex justify-content-between align-items-center'
    
    let newToDoSpan = document.createElement("span")
    newToDoSpan.innerHTML = newToDo

    let newToDoTrash= document.createElement("i")
    newToDoTrash.className ='fa fa-trash-o delete'

    newToDoTrash.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });
    newToDoLi.append(newToDoSpan,newToDoTrash )
    console.log(newToDoLi)
    ul.appendChild(newToDoLi);

}
input.addEventListener('keydown',function(e) {
    let newToDoValue = e.target.value.trim();
    if(e.code == 'Enter' || e.code == 'NumpadEnter'){
        e.preventDefault()
        
        if(newToDoValue){
            input.value=''
           addNewToDo(newToDoValue)
        }
        else{
            input.value=''
            alert("It cannot be empty")
        }
      
    }

});