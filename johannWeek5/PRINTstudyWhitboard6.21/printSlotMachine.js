// Slot Machine Instructions- Build a simple slot Machine; Minimum 5 items / reel; 3 reels; users can BET -  Min or Max; Total (amoutn $) won or loss; Min Bet = $5; Max Bet = $50; Matches of 3 wheels is A WIN.; WIN is 10x BET.

// Score Grandparent FUNCTION (A of A & B)
let balance = 1000
document.getElementById("minBetButton").onclick = function(){
  let outcome = winCheck()
  if (outcome === "loss"){
    balance = balance - 5
  }else if (outcome === "win"){
    balance = balance - 5 + (5 * 10)
  }
document.getElementById("amount").innerHTML = balance
}

// Parent FUNCTION
function winCheck (){
  let reel1 = reelspin()
  let reel2 = reelspin()
  let reel3 = reelspin()
  if(reel1 === reel2 && reel2 === reel3){
    return "win"
  }else{
    return "loss"
  }
}

// Child FUNCTION
function reelspin(){
  let result = Math.random()
  if (result<.2){
    return "Duck"
  }else if (result<.4){
    return "Frog"
  }else if (result<.6){
    return "Zebra"
  }else if (result<.8){
    return "Cow"
  }else if (result<1){
    return "Dog"
  }
}
