function fibonacci(){
  let termTemp = 0
  let termOne = 1
  let termTwo = 2
  let oddSum = 1

  for(let i=0; i<31; i++){
    termTemp = termOne
    termOne = termTwo
    termTwo = termTwo + termTemp
    console.log(termTwo)

    if(termTwo%2 !== 0){
    oddSum= termTwo + oddSum
  }
  }
    console.log(oddSum + "sum")
}

// ----------------

function fibonacci(){
  let numOne = 1
  let numTwo=2
  let tempTerm=0
  let oddSum= 1

 while (numTwo < 6000000) {
  tempTerm = numTwo
   numTwo = numTwo+ numOne
   numOne= tempTerm
   console.log(numTwo)


   if (numTwo %2 !==0 && numTwo < 6000000){
     oddSum= oddSum + numTwo



 }
 }

  console.log(oddSum + "sum")
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
