let firstcard = 10
let secondcard = 6
let sum = firstcard + secondcard
let blackJack = false
let message = ""

let messageEl = document.getElementById('messege-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById("cards-el")


function startGame(){
    renderGame()
}

function renderGame(){
   if (sum <= 20){
        message = "Teke a card"
        console.log(message)
    }else if(sum === 21){
        message = 'Got a Blackjak!!!'
        blackJack = true
        console.log(message)
    }else{
        message = "Your out!!!"
        console.log(message)
    }
    messageEl.textContent = message
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = "Cards: " + firstcard + " " + secondcard
}

function newcard(){
    console.log('New card from the deck!')
    let card = 5
    sum += card
    renderGame()
}
