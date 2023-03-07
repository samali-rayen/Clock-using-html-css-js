function updateClock(){
    const date= new Date()
    const seconds=date.getSeconds()
    const minutes=date.getMinutes()
    const hours=date.getHours()
    const day=date.getDay()
    const month=date.getMonth()

    const hourHand=document.querySelector(".hours-el")
    const minuteHand=document.querySelector(".minutes-el")
    const secondsHand=document.querySelector(".seconds-el")

    
    if(hours===0){
        hourHand.innerHTML=00
    }else{
        hourHand.innerHTML=hours
    }
    if(minutes===0){
        minuteHand.innerHTML=00
    }else{
        minuteHand.innerHTML=minutes
    }
    if(seconds===0){
        secondsHand.innerHTML=00
    }else{
        secondsHand.innerHTML=seconds
    }
}
setInterval(updateClock, 1000)