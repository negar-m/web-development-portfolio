const listItems = [
  { id: 1, name: 'John', family: 'Anderson' },
  { id: 2, name: 'Michael', family: 'Johnson' },
  { id: 3, name: 'David', family: 'Williams' },
  { id: 4, name: 'Robert', family: 'Brown' },
  { id: 5, name: 'James', family: 'Miller' },

  { id: 6, name: 'William', family: 'Davis' },
  { id: 7, name: 'Richard', family: 'Garcia' },
  { id: 8, name: 'Joseph', family: 'Martinez' },
  { id: 9, name: 'Thomas', family: 'Hernandez' },
  { id: 10, name: 'Charles', family: 'Lopez' },

  { id: 11, name: 'Daniel', family: 'Gonzalez' },
  { id: 12, name: 'Matthew', family: 'Wilson' },
  { id: 13, name: 'Anthony', family: 'Anderson' },
  { id: 14, name: 'Mark', family: 'Taylor' },
  { id: 15, name: 'Steven', family: 'Moore' },

  { id: 16, name: 'Paul', family: 'Jackson' },
  { id: 17, name: 'Laura', family: 'Martin' },
  { id: 18, name: 'Emily', family: 'Thompson' },
  { id: 19, name: 'Sophia', family: 'White' },
  { id: 20, name: 'Oliver', family: 'Harris' },

  { id: 21, name: 'Liam', family: 'Clark' },
  { id: 22, name: 'Emma', family: 'Lewis' }
]


let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 5


function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedUsers = allUesrsArray.slice(startIndex , endIndex)
    paginatedUsers.forEach(function (user) {
        let userElement = document.createElement('div')
        userElement.innerHTML = user.name + ' ' + user.family
        userElement.classList.add('item')
        usersContainer.appendChild(userElement)

    })
}

function setupPagination(allUesrsArray, pagesContainer , rowsCount){
    pagesContainer.innerHTML =''
    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)
    for(let i = 1  ; i < pageCount + 1 ; i++){
        let btn = paginationButtongenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
       
    }
}
function paginationButtongenerator(page, allUesrsArray){
    let button = document.createElement('button')
    button.innerHTML = page
    if(page === currentPage){
        button.classList.add('active')
    }
    button.addEventListener('click',function(e){
            
        currentPage = page
        // currentPage = e.target.textContent
        displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage)
        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')
        button.classList.add('active')
    })
    return button
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
setupPagination(listItems,paginationContainer,rowsCount)



