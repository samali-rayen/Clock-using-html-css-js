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

    hourHand.innerHTML=hours
    minuteHand.innerHTML=minutes
    secondsHand.innerHTML=seconds
}
setInterval(updateClock, 1000)