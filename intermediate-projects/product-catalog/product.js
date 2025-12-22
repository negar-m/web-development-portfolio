let btn = document.querySelector('button')
btn.addEventListener('click', function(){
    history.back();
})


let shoseTitle = document.querySelector('h1')
let shoseDesc = document.querySelector('p')
let shoseImg = document.querySelector('img')

let shoseArray = [
    {id:1, title: "boots", price: '5$', img:'img/22.png',desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?'},
    {id:2, title: "women", price: '2$', img:'img/3.png',desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?'},
    {id:3, title: "men", price: '8$', img:'img/4.png',desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?'}
 ];

let locationSearchParams = new URLSearchParams(location.search)
let urlId = locationSearchParams.get('id')

let mainProduct = shoseArray.find(function(shose) {
    return shose.id === Number(urlId)
})

if(mainProduct){
    shoseTitle.innerHTML = mainProduct.title
    shoseImg.setAttribute('src',mainProduct.img)
    shoseDesc.innerHTML = mainProduct.desc
}else{
    location.href = 'index.html'
}