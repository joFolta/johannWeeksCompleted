// *Variables*
// Create a variable, reassign the value, add the value to the dom
// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication
// *Functions*
// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.
// *Conditionals*
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice
// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.
// *Loops*
// Redo FIZZBUZZ with your own rules
// Print a pyramid to the console where the base of the pyramid is a number passed into a function





// *Variables*
// Create a variable, reassign the value, add the value to the dom
	let duckSound = "quack";
	duckSound = "woof";
	document.getElementById("duckSound").innerHTML = duckSound
// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication
	let mango = 5;
	product = mango * mango;
	document.getElementById("mango").innerHTML=product;
// *Functions*
// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
	function fahrenheitToCelcius(fahrenheit){
  	let celcius = (fahrenheit-32)*(5/9)
  	console.log(celcius)
	}
	fahrenheitToCelcius(212)
	100

	fahrenheitToCelcius(32)
	0

// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.
	function firstFunc (param1, param2) {
	  let sum = param1 + param2
		  return sum
	}

	function secFunc (par1) {
	  alert (par1)
	}

	secFunc(firstFunc(2,3))

// *Conditionals*
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice
	function randomThrow(){
		let choice = Math.random()
		if (choice < .2){
			alert("rock")
		} else if (choice <.4){
			alert("paper")
		} else if (choice < .6){
			alert("scissors")
		} else if (choice <.8){
			alert("lizard")
		} else if (choice < 1){
			alert("spock")
		}
	}

// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.
function ifDivThenProdOrSum(num1, num2){
	if (num2 % num1 === 0){
		let product = num1 * num2
		alert(product)
	} else {
		let sum = num1 + num2
		alert(sum)
	}
}
ifDivThenProdOrSum(5,10)

// *Loops*
// Redo FIZZBUZZ with your own rules
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. Print "FizzBuzz" for numbers that are divisible by both 3 and 5.
for(count = 1; count <= 100; count++){
	if (count % 3 === 0 && count % 5 === 0){
		console.log("Fizzbuzz")
	} else if (count % 3 === 0){
		console.log("Fizz")
	} else if (count % 5 === 0){
		console.log("Buzz")
	} else {
		console.log(count)
	}
}

// Print a pyramid to the console where the base of the pyramid is a number passed into a function
function pyramid(linesOfPyramid){
  let numberOfLines = ""
	for (i = 0; i < linesOfPyramid; i = i + 1){
		numberOfLines = numberOfLines + "_"
		console.log(numberOfLines)
	}
}


pyramid(30)


corrected: number as base?????:

function pyramid(num) {
  let base = num.toString()
 for(let i=1; i<=num; i++){
   let leftSpace = ' '.repeat(num-i);
   let rightLayer = base.repeat(i)
   console.log(leftSpace + rightLayer);
 }
}
