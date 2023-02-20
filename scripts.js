const increment = document.getElementById('score-up')
const decrement = document.getElementById('score-down')
const scoreDisplay = document.getElementById('score')

let score = 0

increment.addEventListener("click", function(){
    score++
    scoreDisplay.innerHTML = score
    decrement.disabled = false
    decrement.style.opacity = "1"
   
})

decrement.addEventListener("click", function(){
    score--
    scoreDisplay.innerHTML = score
    if (score === 0) {
        decrement.style.opacity = "0.5"
    }
})