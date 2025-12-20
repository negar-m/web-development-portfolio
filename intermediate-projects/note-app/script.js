let formInput = document.querySelector('.form-control')
let colors = document.querySelectorAll('.color-box')
let btnSave = document.getElementById('btn-save')
let btnDelete = document.getElementById('btn-delete')
let listed = document.getElementById('listed')

function addNote(){
    if(formInput.value){
        let card = document.createElement('div')
        card.addEventListener('click',function(e) {
            e.target.parentElement.remove()
        })
        card.className ='card shadow-sm rounded'
        let cardBg = formInput.style.backgroundColor
        card.style.backgroundColor = cardBg
        let cardText = document.createElement('p')
        cardText.className ='card-text p-3'
        cardText.innerHTML = formInput.value
        card.appendChild(cardText)
        listed.appendChild(card)
        formInput.value=''
        formInput.style.backgroundColor ="#fff"
    }else{
        alert("Please enter value")
    }
   
}

btnDelete.addEventListener('click',function(e) {
    formInput.value=""
    formInput.style.backgroundColor ="#fff"
})

btnSave.addEventListener('click',addNote)

formInput.addEventListener('keydown',function(event) {
    if(event.key === 'Enter'){
        addNote()
    }
})

colors.forEach(function(color){
    color.addEventListener('click', function(e) {
        let mainColor = e.target.style.backgroundColor
        formInput.style.backgroundColor = mainColor
    })
})
