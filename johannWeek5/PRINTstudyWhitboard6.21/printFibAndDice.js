// ----------------
function fibonacci(){
  let numOne = 1
  let numTwo=2
  let tempTerm=0
  let oddSum= 1

   while (numTwo < 6000000) {
    tempTerm = numOne
    numOne = numTwo
    numTwo= numTwo + tempTerm
      if (numTwo %2 !==0 && numTwo < 6000000){
       oddSum= oddSum + numTwo
      }
   }
  console.log(oddSum)
}


// --------
function rollDice(numOfDice, numOfSides){
 let result=0
  for(let i=0; i< numOfDice; i++){
  result = Math.random()
  result = result * numOfSides
  result= Math.ceil(result)
  console.log(result)
  }
}
