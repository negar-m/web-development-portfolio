const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelectorAll(".slider-item");
let sliderImgElem = $.querySelector("img")
let index = 0;

let imgSrcArray = ["img/1.jpg" ,"img/2.png","img/3.jpg"]

function prevItem() {
    index--
    if (index < 0) {
        index = imgSrcArray.length - 1
    }
    sliderImgElem.setAttribute('src', imgSrcArray[index])
}
function nextItem() {
  index++
  if (index > imgSrcArray.length - 1) {
    index = 0
  }
  sliderImgElem.setAttribute('src', imgSrcArray[index])
 
}

setInterval(nextItem , 5000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
