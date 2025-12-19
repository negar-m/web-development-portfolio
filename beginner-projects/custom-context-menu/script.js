let contextMenu = document.querySelector('.context-menu')



function contextHandler(event){
    event.preventDefault()
    console.log('contextMenu');
    contextMenu.style.left = event.pageX+'px'
    contextMenu.style.top = event.pageY+'px'
    contextMenu.style.display = 'block'
    console.log(event);
}
function clickHandler(){
    contextMenu.style.display = 'none'
}
function keydownHandler(event){
    if(event.keyCode ==27){
        contextMenu.style.display = 'none'
    }
}
document.body.addEventListener('contextmenu',contextHandler)
document.body.addEventListener('click',clickHandler)
document.body.addEventListener('keydown',keydownHandler)
