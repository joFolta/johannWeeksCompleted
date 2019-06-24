
// ``````
var total = 1000;

document.getElementById('minBet').addEventListener("click", function(){
  //set reel values
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(reel1,reel2,reel3)=== true){
    total = total -5 + 50;
  }else{
    total = total - 5;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

document.getElementById('maxBet').addEventListener("click", function(){
  //set reel values
  // conditional to update total value
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  console.log(reel1,reel2,reel3)
  //conditional to update total value
  if( checkMatch(reel1,reel2,reel3)=== true ){
    total = total -50 + 500;
  }else{
    total = total - 50;
  }
  //update dom with new total
  document.getElementById('total').innerHTML = total;
});

//choose random value for the reel
function randomReel(){
  // 1 out of 5
  var choice = Math.random()
  if (choice < .2){
    choice = "cherry"
  }else if(choice < .4){
    choice = "bar"
  }else if(choice < .6){
    choice = "seven"
  }else if(choice < .8){
    choice = "bell"
  }else{
    choice = "moneyBag"
  }
  //return the value
  return choice;
}
//compare reels to find if they are a winner
function checkMatch(reel1,reel2,reel3){
  if( reel1 === reel2 && reel2 === reel3 ){
    return true
  }else{
    return false
  }
}
//return true or false```
