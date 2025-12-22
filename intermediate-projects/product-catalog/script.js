
 let container = document.querySelector('.container')
 let shoseArray = [
    {id:1, title: "boots", price: '5$', img:'img/22.png'},
    {id:2, title: "women", price: '2$', img:'img/3.png'},
    {id:3, title: "men", price: '8$', img:'img/4.png'}
 ];

 shoseArray.forEach(function(product){
    container.insertAdjacentHTML('beforeend','<div class="product-card"><h1>'+product.title+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+product.img+');"></div><div class="product-info"><div class="product-price">'+product.price+'</div><a href="product.html?id='+ product.id +' "class="product-button">See More</a></div></div>')
 })

    