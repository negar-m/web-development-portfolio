let titleElem = document.querySelector('.title')
document.addEventListener('keyup', function(event){
    console.log(event)
    //Backspace
    if(event.keyCode === 8){
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
    //Shift
    if(event.keyCode === 16){
        titleElem.innerHTML += event.key.slice(0 ,-5)
        return
    }
    //CapsLock
    if(event.keyCode === 20){
        titleElem.innerHTML += event.key.slice(0 ,-11).toUpperCase()
        return //ادامه ی  کد را اجرا نمیکند
    }

    let userEventKey = event.key
    titleElem.innerHTML += event.key
    
    let mainKeyElem = document.getElementById(userEventKey.toUpperCase())
    mainKeyElem.classList.add('hit')
    mainKeyElem.addEventListener('animationend', function(event){
        mainKeyElem.classList.remove('hit')
    })
   
})