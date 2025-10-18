let $ = document
let converter = $.querySelector('#converter')
let result = $.querySelector('.result')
let firstValue = $.querySelector('.C')
let secondValue = $.querySelector('.F')
let convertButton = $.querySelector('.convertButton')
let resetButton = $.querySelector('.resetButton')
let changeButton = $.querySelector('.changeButton')

function convert (){
    if(converter.value ===''){
        result.innerHTML = 'incorrect value'
        result.style.color = 'red'
    }
    else {
        if(firstValue.innerHTML ==='°C'){
            result.innerHTML = converter.value +'°C To '+((converter.value * 9/5) + 32) +'°F'
            result.style.color = 'rgb(255, 255, 102)'
        }
        else{
            result.innerHTML = converter.value +'°F To '+((converter.value -32)*5/9).toFixed(2) +'°C'
            result.style.color = 'rgb(255, 255, 102)'
        }
    
    }
}
function reset(){
    converter.value = ''
    result.innerHTML = ''
}
function swap(){
    if( firstValue.innerHTML ==='°C'){
        firstValue.innerHTML ='°F'
        secondValue.innerHTML ='°C'
         converter.setAttribute('placeholder', '°F')
         $.title = '°F to °C'
        
    }else{
        secondValue.innerHTML ='°F'
        firstValue.innerHTML ='°C'
        converter.setAttribute('placeholder', '°C')
        $.title = '°C to °F'
    }
}
convertButton.addEventListener('click', convert)
resetButton.addEventListener('click',reset)
changeButton.addEventListener('click',swap)