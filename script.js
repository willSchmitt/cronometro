const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonLowerTime = document.querySelector('.lowerTime')

const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')
minutesDisplay.textContent = Number(minutesDisplay.textContent)
let stopTimeOut 

const soundForest = document.querySelector('.forestCard')
const soundRain = document.querySelector('.rainCard')
const soundCoffe = document.querySelector('.coffeCard')
const soundFireplace = document.querySelector('.fireplaceCard')

const audioForestCard = new Audio('Floresta.wav')
const audioRainCard = new Audio('Chuva.wav')
const audioCoffeCard = new Audio('Cafeteria.wav')
const audioFireplaceCard = new Audio('Lareira.wav')



soundForest.addEventListener('click',() => {
  if(audioForestCard.paused){
    audioForestCard.play()   
  }else{
    audioForestCard.pause()
  }
})

soundRain.addEventListener('click',() => {
  if (audioRainCard.paused) {
    audioRainCard.play()
    } else {
    audioRainCard.pause();
    }
})

soundCoffe.addEventListener('click',() => {
  if(audioCoffeCard.paused){
    audioCoffeCard.play();
  }else{
    audioCoffeCard.pause();
  }
})

soundFireplace.addEventListener('click',() => {
  if(audioFireplaceCard.paused){
    audioFireplaceCard.play();
  }else{
    audioFireplaceCard.pause();
  }

  audio.loop(true)
})

//############################################

function countDown(){
  stopTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if(seconds <=0){
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    
    if(minutes <= 0){
      return
    }

    countDown()
  }, 1000)
}

buttonPlay.addEventListener('click',() => {
  countDown()
})

buttonStop.addEventListener('click',() =>{
  clearTimeout(stopTimeOut)
})

buttonAddTime.addEventListener('click',() => {
  
})