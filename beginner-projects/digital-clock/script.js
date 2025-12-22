let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let seconds = document.querySelector('#seconds')
setInterval(timer,1000)

function timer(){
    let time = new Date()
    let nowHour = time.getHours()
    let nowMinute = time.getMinutes()
    let nowSeconds = time.getSeconds()
    if(nowHour <10){
        nowHour = '0' + nowHour
    }
    if( nowMinute  <10){
        nowMinute = '0' + nowMinute
    }
    if(nowSeconds <10){
        nowSeconds = '0' + nowSeconds
    }
    
        hour.innerHTML =  nowHour
        minute.innerHTML =  nowMinute
        seconds.innerHTML =  nowSeconds
    

}