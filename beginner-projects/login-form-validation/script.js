 let usernameInput = document.querySelector('.username')
 let passwordInput = document.querySelector('.password')


 let usernameMassage = document.querySelector('.username-validation')
 let passwordMassage = document.querySelector('.password-validation')

 function usernameValidation (){
    if (usernameInput.value.length < 12) {
        usernameMassage.innerHTML = 'contain must be at least 12 characters'
        usernameMassage.style.color = 'red'
    } else {
        usernameMassage.innerHTML = 'contain correct length'
        usernameMassage.style.color = 'green'
    }
    usernameMassage.style.display = 'block'
 }


 function passwordValidation (){
    if (passwordInput.value.length < 8) {
        passwordMassage.innerHTML = 'contain must be at least 8 characters'
        passwordMassage.style.color = 'red'
    } else {
        passwordMassage.innerHTML = 'contain correct length'
        passwordMassage.style.color = 'green'
    }
    passwordMassage.style.display = 'block'
 }
