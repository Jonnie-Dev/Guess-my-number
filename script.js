'use strict';

const secretNumber = Math.floor(Math.random()*20)+1

const secretNumberElement = document.querySelector(".number")

const inputElement = document.querySelector(".guess")

const message = document.querySelector(".message")

const scoreElement = document.querySelector(".score")
let score = Number(scoreElement.textContent)

const highscoreElement = document.querySelector(".highscore")

const checkBtn = document.querySelector(".check")
const againBtn = document.querySelector(".again")

const reset = _ => {
    document.querySelector("body").style.backgroundColor = "#222"
    secretNumberElement.textContent = "?"
    inputElement.value = ""
    message.textContent = "Start guessing..."
    scoreElement.textContent = 20
    score = 20
}

const check = () => {
    let messageContent = ""
 

    if(!inputElement.value) {
        messageContent = "🚨No Number!🚨"
    } else if (inputElement.value == secretNumber) {
        messageContent = "💥🎉 Correct Number!"

        secretNumberElement.textContent = inputElement.value

        document.querySelector("body").style.backgroundColor = "#60b347"

        score > highscoreElement.textContent  ? highscoreElement.textContent = score : highscoreElement.textContent
    } else {
        if (inputElement.value > secretNumber) {
            messageContent = "📉 Too high"
        } else {
            messageContent = " 📈 Too low"
        }
        score -= 1
        scoreElement.textContent = score
    }

    message.textContent = messageContent

}

checkBtn.addEventListener("click", check)
againBtn.addEventListener("click", reset)