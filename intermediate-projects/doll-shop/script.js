let allProducts = [
    { id: 1, title: 'Rabbit', price: 10, img: 'img/toy (1).jpg' , count:1 },
    { id: 2, title: 'Doll', price: 20, img: 'img/toy (2).jpg' , count:1},
    { id: 3, title: 'Car', price: 30, img: 'img/toy (3).jpg' , count:1},
    { id: 4, title: 'Deer', price: 40, img: 'img/toy (4).jpg' , count:1},
    { id: 5, title: 'Rabbit', price: 100, img: 'img/toy (5).jpg', count:1 },
    { id: 6, title: 'Train', price: 50, img: 'img/toy (6).jpg' , count:1},
]

let userBasket =[]
let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const cartItemsContainer = $.querySelector('.cart-items')
const cartTotalPrice = $.querySelector('.cart-total-price')
const removeAllProductBtn = $.querySelector('#remove-all-products')
let shopItemsFragment = $.createDocumentFragment()
let cartItemsFragment = $.createDocumentFragment()

allProducts.forEach(function (product) {
    let productContainer = $.createElement('div') 
    productContainer.classList.add('shop-item')

    let productTitleSpan = $.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML =product.title

    let productImageElem = $.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPriceSpan  = $.createElement('span')
    productPriceSpan .classList.add('shop-item-price')
    productPriceSpan .innerHTML =product.price

    let prodcutAddButton = $.createElement('button')
    prodcutAddButton.className = 'btn btn-primary shop-item-button'
    prodcutAddButton.innerHTML =  'ADD TO CART'
    prodcutAddButton.addEventListener('click', function(){
        addProductToBasket(product.id)
    })

    productDetailsContainer.append(productPriceSpan,prodcutAddButton )
    productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)

    shopItemsFragment.append(productContainer)
})
shopItemsContainer.append(shopItemsFragment)

function addProductToBasket(productId){
    let mainProduct = allProducts.find(function (product){
        return product.id === productId
    })
    let exit = userBasket.some(function (exitProduct){
        if (productId === exitProduct.id){
            return true
        }
    })

    if(exit){
        mainProduct.count ++
        createProductToBasket(userBasket)
        calcTotalPrice(userBasket)
    }else{
        userBasket.push(mainProduct)
        createProductToBasket(userBasket)
        calcTotalPrice(userBasket)
    }
    
}

function removeProductFromBasket(productId){
    userBasket = userBasket.filter (function(product){
        return product.id !== productId
    })
    createProductToBasket(userBasket)
    console.log(userBasket)
    updateProductCount(productId, userBasket.count)
}

function createProductToBasket(userBasketArray){
    cartItemsContainer.innerHTML = ''
    
    userBasketArray.forEach(function(product){
    let cartRowDiv =$.createElement('div')
    cartRowDiv.classList.add('cart-row')
    
    let cartItemDiv =$.createElement('div')
    cartItemDiv.className = 'cart-item cart-column'

    let cartItemImg = $.createElement('img')
    cartItemImg.classList.add('cart-item-image')
    cartItemImg.setAttribute('src', product.img)
    cartItemImg.setAttribute('width', 100)
    cartItemImg.setAttribute('height', 100)


    let cartItemTitle = $.createElement('span')
    cartItemTitle.classList.add('cart-item-title')
    cartItemTitle.innerHTML = product.title

    cartItemDiv.append(cartItemImg, cartItemTitle)

    let cartPrice = $.createElement('span')
    cartPrice.className = 'cart-price cart-column'
    cartPrice.innerHTML = product.price

    let cartQuantity =$.createElement('div')
    cartQuantity.className = 'cart-quantity cart-column'

    let cartInput = $.createElement('input')
    cartInput.classList.add('cart-quantity-input')
    cartInput.setAttribute('type', 'number')
    cartInput.value = product.count
    cartInput.setAttribute('value', product.count)
    cartInput.addEventListener('change', function() {
        updateProductCount(product.id , cartInput.value)
    })

    let cartbutton = $.createElement('button')
    cartbutton.className = 'btn btn-danger'
    cartbutton.innerHTML = 'REMOVE'
    cartbutton.setAttribute('type', 'button')
    cartbutton.addEventListener('click',function() {
        removeProductFromBasket(product.id)
    })

    cartQuantity.append(cartInput, cartbutton)
    cartRowDiv.append(cartItemDiv ,cartPrice ,cartQuantity)
    cartItemsFragment.append(cartRowDiv)
   })
   cartItemsContainer.append(cartItemsFragment)
    

}

removeAllProductBtn.addEventListener('click', function() {
    userBasket = []
    createProductToBasket(userBasket)
    cartTotalPrice.innerHTML = '0$'
})
function calcTotalPrice(userBasketArray){
    let totalPriceValue = 0
    userBasketArray.forEach(function (product) {
        totalPriceValue += product.price * product.count
    })
    cartTotalPrice.innerHTML = totalPriceValue
}

function updateProductCount(productId ,newCount){

    console.log(productId ,newCount)
    userBasket.forEach(function (product) {
        if(product.id === productId){
            product.count = newCount
        }
    })
    calcTotalPrice(userBasket)
    
}