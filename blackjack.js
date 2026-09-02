let firstcard= getrandomcard()
let secondcard=getrandomcard()
let cards= [firstcard,secondcard]
let sum = cards[0] + cards[1]
let win = false
let notlost = false
let lost = false
let show = ""
let alertsms = document.getElementById("message")
let result = document.getElementById("sumtxt")
let cardshow = document.getElementById("cardstxt")
function startgame(){
    rendergame()
}
function getrandomcard(){
    return 5
}
function rendergame() {
    
    if (sum < 21) {
        show = "You can try with another card !"
        notlost = true
    }
    else if (sum === 21) {
        show = "wohoo! you've goten exact sum !"
        win = true
    }
    else {
        show = "You're out of the game !"
        lost = true
    }
    alertsms.textContent = show
    result.textContent = "sum: " + sum
    cardshow.textContent=  "cards: "
    for (let i = 0; i<cards.length; i++){
    cardshow.textContent += cards[i] + " "
    }
}

function newcard() {
   let thirdcard= getrandomcard()
   cards.push(thirdcard)
   sum += cards[2]
   rendergame()
}   