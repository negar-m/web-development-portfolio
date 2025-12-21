let weightInput =document.querySelector('#weight')
let heightInput =document.querySelector('#height')
let weightVal =document.querySelector('#weight-val')
let heightVal =document.querySelector('#height-val')
let result =document.querySelector('#result')
let category =document.querySelector('#category')

function bmiCalculator(){
    let bmiValue = (weightInput.value /(Math.pow(heightInput.value/100,2))).toFixed(1)
    weightVal.innerHTML = weightInput.value + ' kg'
    heightVal.innerHTML = heightInput.value + ' cm'
    result.innerHTML = bmiValue

    if(bmiValue < 18.5){
        category.innerHTML = 'underWeight'
        result.style.color ='#ffc44d'
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        category.innerHTML = 'Normal Weight'
        result.style.color ='#0be881'
    }
    else if(bmiValue >= 25 && bmiValue < 29.9){
        category.innerHTML = 'overWeight'
        result.style.color ='#ff884d'
    }else{
        category.innerHTML = 'obese'
        result.style.color ='#ff5e4d'
    }

}

weightInput.addEventListener('change',bmiCalculator)
heightInput.addEventListener('change',bmiCalculator)