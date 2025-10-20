let $ =document
let searchInput = $.querySelector('.search-input')
let autocom = $.querySelector('.autocom-box')
let input = $.querySelector('input')

input.addEventListener('keyup',function(){
    let inputValue = input.value
    if (inputValue){
        searchInput.classList.add('active')
        let filterWords = suggestions.filter(function(word){
            return word.toLowerCase().includes(inputValue.toLowerCase())
        })
        console.log(filterWords)
        itemGenerator(filterWords)
    }
    else{
        searchInput.classList.remove('active')
    }
});

function itemGenerator(wordsArray){
    let suggestArray = wordsArray.map(function(word){
        return '<li>' + word + '</li>'
    })
    let customSuggestions
    if(!suggestArray.length){
        customSuggestions = '<li>' + input.value+'</li>'
    }
    else{
        customSuggestions =  suggestArray.join('')
        console.log(customSuggestions)
    }

    autocom.innerHTML = customSuggestions
    select()
}

function select(){
    let allListItems = autocom.querySelectorAll('li')
    allListItems.forEach(function(item){
        item.addEventListener('click', function(event){
            input.value = event.target.textContent
            searchInput.classList.remove('active')
        })
    })
}