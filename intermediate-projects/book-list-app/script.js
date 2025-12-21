let bookList = document.querySelector('#book-list')
let titleElem = document.querySelector('#title')
let authorElem = document.querySelector('#author')
let yearElem = document.querySelector('#year')
let addBtn = document.querySelector('.add-btn')
let tableElem = document.querySelector('#book-list')
let bookArray =[]
let clearBtn = document.querySelector('#clear-books')

clearBtn.addEventListener('click', function () {
    localStorage.removeItem('bookArray')
    bookArray = []
    tableElem.innerHTML = ''
})

addBtn.addEventListener('click', function(event) {
    event.preventDefault()
    if (titleElem.value ==='' || authorElem.value ==='' || yearElem.value == '') {
        alert('Please enter all inputs.')
    } else {
        let newBookObject = {
            id:bookArray.length+1 ,
            title:titleElem.value,
            author:authorElem.value,
            year:yearElem.value
        }
        bookArray.push(newBookObject)
    
        setLocalStorage(bookArray)
        // booksGenrator(bookArray)
    }
    
})


function setLocalStorage(allBooksArray) {
    localStorage.setItem('bookArray', JSON.stringify(allBooksArray))
    makeEmptyInputs()
    booksGenrator(allBooksArray)
    
}
function makeEmptyInputs(){
    titleElem.value = ''   
    authorElem.value = ''
    yearElem.value = ''   
}

function booksGenrator(allBooksArray){
    tableElem.innerHTML = ''

    allBooksArray.forEach(function(book, index){
        let tr = document.createElement('tr')

        let titletable = document.createElement('th')
        titletable.innerHTML = book.title

        let authortable = document.createElement('th')
        authortable.innerHTML = book.author

        let yeartable = document.createElement('th')
        yeartable.innerHTML = book.year

        
        let deleteTd = document.createElement('th')
        deleteTd.innerHTML = '❌'
        deleteTd.style.cursor = 'pointer'

        deleteTd.addEventListener('click', function () {
            bookArray.splice(index, 1)
            setLocalStorage(bookArray)
        })

        tr.append(titletable, authortable, yeartable, deleteTd)
        tableElem.appendChild(tr)
    })
}

function getBooksLocalStorage(){
    let localStorageBooks = localStorage.getItem('bookArray')
    if (localStorageBooks) {
        bookArray = JSON.parse(localStorageBooks)
        booksGenrator(bookArray)
    }
}

window.addEventListener('load', getBooksLocalStorage)