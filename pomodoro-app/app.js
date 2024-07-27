const bells = new Audio('./sounds/bell.wav')
const startBtn = document.querySelector('.btn-start')
const session = document.querySelector('.minutes')
let myInterval
let state = true

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state) {
      state = false;
      let totalSeconds = sessionAmount * 60;
  
      const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;

        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
        }
      }
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert('Session has already started.')
    }
}

startBtn.addEventListener('click', appTimer);

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * 5 + 1)
    let backdrop = document.getElementById('backdrop')
    if (randomIndex == 1) {
        backdrop.style.backgroundImage = 'url(https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148976749.jpg?w=1380&t=st=1722087624~exp=1722088224~hmac=a8fae52860c9f39c87c81e05131ee3c17f412a5307a0f6bf6379182378912c9e)'
    } else if (randomIndex == 2) {
        backdrop.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/006/115/520/non_2x/premium-background-design-with-diagonal-line-pattern-horizontal-template-for-digital-lux-business-banner-formal-invitation-luxury-voucher-prestigious-gift-certificate-free-vector.jpg)'
    } else if (randomIndex == 3) {
        backdrop.style.backgroundImage = 'url(https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg)'
    } else if (randomIndex == 4) {
        backdrop.style.backgroundImage = 'url(https://marketplace.canva.com/EAE4ByqWxFY/1/0/1600w/canva-soft-brown-peach-brown-minimalist-new-happy-creative-elegant-abstract-aesthetic-background-zoom-virtual-background-MP1cWZ2ZxqU.jpg)'
    } else if (randomIndex == 5) {
        backdrop.style.backgroundImage = 'url(https://marketplace.canva.com/EAFBAmRozFQ/1/0/1600w/canva-cyan-purple-pink-gradient-color-and-style-video-background-eUOIOtsRh6A.jpg)'
    } 
}

changeBackground()