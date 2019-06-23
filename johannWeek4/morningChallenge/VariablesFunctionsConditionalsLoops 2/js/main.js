// *Variables*
// Create a variable, reassign the value, add the value to the dom

let domVar = 10
  domVar = 15
  document.getElementById('oi').innerHTML = domVar

// comments
// .innerHTML - replaces what's in the HTML
// wheras onclick activated the function
// You can also change the class name and write ".getElementsByClassName('className')"


// --------
// Create a variable,
// multiply it by itself,
// replace a number in the dom with the new number from the multiplication

let mango = 5
// mango *= mango  // mango = mango * mango
product = mango * mango //alternative option
// document.getElementById("numberInDom").innerHTML = mango
document.getElementById("numberInDom").innerHTML = product

// comments
// numberInDom is 100 for this example.
//an alternative to mango *= mango, a new variable can be declared




// --------------------
// *Functions*
// Create a function that takes in one argument.
// That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
function fahrenheitToCelcius(fahrenheit){
  let celcius = (fahrenheit-32)*(5/9)
  console.log(celcius)
}
fahrenheitToCelcius(212)
100

fahrenheitToCelcius(32)
0
// ----------------------
// Create a function takes in two arguments.
// Create a function that takes in one argument and alerts that value.
// Call the second function with an argument that is the sum from the original two argument function.
function firstFunc (param1, param2) {
  let sum = param1 + param2
  return sum
}

function secFunc (par1) {
  // let secFuncSum = firstFunc(2, 3)
  alert (par1)
  // console.log(secFuncSum);
}

secFunc(firstFunc(2,3))

// alternative****
// let sum = 0
//
// function firstFunc (param1, param2) {
//   sum = param1 + param2
// }
//
//
// function secFunc (sum) {
//   firstFunc(2,3)
//   let secFuncSum = sum
//   alert(secFuncSum);
// }
//
// secFunc(2)

// ------------------------

// *Conditionals*
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomThrow () {
  let choice = getRandomInt(0,5)
  if (choice === 0){
    choice = "rock"
  } else if (choice === 1){
    choice = "paper"
  } else if (choice === 2){
    choice = "scissors"
  } else if (choice === 3){
    choice = "lizard"
  } else if (choice === 4){
    choice = "spock"
  }
  alert(choice)
}
randomThrow()

// Create a function that takes in two numbers.
// If the second number is divisible by the first, alert the product of those two numbers.
// If not, alert the sum of those two numbers.

function divisByFirst (num1, num2) {
  if(num2 % num1 === 0) {
    let product = num1 * num2
    alert(product)
  }else{
    let sum = num1 + num2
    alert (sum)
  }
}

divisByFirst(5, 10)

// Comments




// *Loops*
for(let i = 0; i <= 100; i++)
// Redo FIZZBUZZ with your own rules
1) If a # is divisable by 3 w/no remainder -> "fizz"
2) If a # is divisable by 5 -> "buzz"
3) If a # is divisable by 3 & 5 -> "fizz buzz"
4) Not divisable evenly -> print #

for (i = 0; i <= 100; i++) {

	if (i % 3 === 0 && i % 5 === 0 ) {
    console.log ("Fizzbuzz")
  }
  else if (i % 3 === 0) {
    console.log("Fizz")
  }
  else if (i % 5 === 0) {
      {console.log ("Buzz")}
  }
  else console.log(i)
}

// Print a pyramid to the console where the base of the pyramid is a number passed into a function
