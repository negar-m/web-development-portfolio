let redValue , GreenValue , BlueValue
setInterval(function(){
    redValue = Math.floor(Math.random() * 255)
    GreenValue = Math.floor(Math.random() * 255)
    BlueValue = Math.floor(Math.random() * 255)
    console.log('rgb(' + redValue + ',' + GreenValue + ',' + BlueValue + ')')
    document.body.style.background =  'rgb(' + redValue + ',' + GreenValue + ',' + BlueValue + ')'
} ,2000)
