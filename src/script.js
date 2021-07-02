let firstcard = 10
let secondcard = 12
let sum = firstcard + secondcard
let blackJack = false
let message = ""

function startgame(){
   if (sum <= 20){
        message = "teke a card"
        console.log(message)
    }else if(sum === 21){
        message = 'Got a Blackjak!!!'
        blackJack = true
        console.log(message)
    }else{
        message = "Your out!!!"
        console.log(message)
    }
}
