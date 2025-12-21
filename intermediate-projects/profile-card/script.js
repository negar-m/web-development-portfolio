let btnColor = document.querySelectorAll('.btn')
let colorTheme

btnColor.forEach(function(color){
    color.addEventListener('click',function(event) {
        colorTheme = event.target.getAttribute('data-color')
        document.documentElement.style.setProperty('--theme-color',colorTheme )
    });
});