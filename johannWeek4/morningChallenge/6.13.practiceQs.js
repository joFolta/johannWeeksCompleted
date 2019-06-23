// *Variables*
// Create a variable and console log the value
// Create a variable, add 10 to it, and alert the value
// *Functions*
// Create a function that adds two numbers and alert the numbers
// Create a function that subtracts three numbers and console log the numbers
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// *Loops*
// Create a function that adds two numbers and console logs Hi x times where x is the sum of the two numbers
// Create a function that takes in one number and adds every number from one to that number and alerts the sum


// *Variables*
// Create a variable and console log the value
 let lunch = "chicken";
 console.log(lunch);


// Create a variable, add 10 to it, and alert the value
  let age = 20;
  age+= 10;
  alert(age);


// *Functions*
// Create a function that adds two numbers and alert the numbers
  function addAndAlertNumbers(num1, num2){
    let sum = num1 + num2;
    alert(num1)
    alert(num2)
    alert(sum)
  }
  addAndAlertNumbers(1,4)


// Create a function that subtracts three numbers and console log the numbers
  function subtract(num1, num2, num3){
    let subThree = num1-num2-num3;
    console.log(subThree, num1, num2, num3)
  }
subtract(10,1,2)


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
  function sumGreater50Jumanji (num1, num2){
    let sum = num1 + num2;
    if (sum > 50){
      alert("Jumanji")
    }
  }
  sumGreater50Jumanji(40, 10)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
  function multIfDiv3Alert (num1, num2, num3){
    let product = num1 * num2 * num3;
    if (product % 3 === 0){
      alert("ZEBRA")
    }
  }
  multIfDiv3Alert(1,1,4)


// *Loops*
// Create a function that adds two numbers and console logs Hi x times where x is the sum of the two numbers
  function addAndHiSumTimes (num1, num2){
    let sum = num1 + num2;
    for(let i = 1; i <= sum; i++){
      console.log("Hi")
    }
  }
  addAndHiSumTimes(1,5)

// Create a function that takes in one number and adds every number from one to that number and alerts the sum
  function addAllNumbersUptoChoice (num1){
    let sum = num1;
    for (let i = 1; i<= num1; i++){
      sum = sum + i;
    }
    alert(sum);
  }
addAllNumbersUptoChoice(2)







// LEON'S EXAMPLES


// *Variables*
// Create a variable and console log the value
// Create a variable, add 10 to it, and alert the value
// *Functions*
// Create a function that adds two numbers and alert the numbers
// Create a function that subtracts three numbers and console log the numbers
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// *Loops*
// Create a function that adds two numbers and console logs Hi x times where x is the sum of the two numbers
// Create a function that takes in one number and adds every number from one to that number and alerts the sum


// *Variables*
// Create a variable and console log the value
  let hair = "blue";
  console.log(hair)
// Create a variable, add 10 to it, and alert the value
  let num = 5;
  num = num + 10;
  alert(num)
// *Functions*
// Create a function that adds two numbers and alert the numbers
  function addsTwoNumbers(num1, num2){
    let sum = num1 + num2;
    alert(`${num1}+${num2}=${sum}`)
  }
// Create a function that subtracts three numbers and console log the numbers
 function subThreeNums(num1, num2, num3){
   let sub = num1 - num2 - num3
   console.log(num1, num2, num3, sub)
 }
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
  function addAndCheck(num1, num2){
    let sum = num1 + num2
    if (sum>50){
      alert("JUMANJI")
    }
  }
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
  function multiThreeAndAlert(num1, num2, num3){
    let product = num1 * num2 * num3;
    if (product % 3 === 0){
      alert("ZEBRA")
    }
  }
// *Loops*
// Create a function that adds two numbers and console logs Hi x times where x is the sum of the two numbers
 function addTwoAndLog(num1, num2){
   let sum = num1 + num2
   for(count = 1; count <= sum; count++){
     console.log("Hi")
   }
 }
// Create a function that takes in one number and adds every number from one to that number and alerts the sum
  function factorialAdd(num){
    let sum = 0;
    for(var i= 1; i <= num; i++){
      sum += i
    }
    alert(sum)
  }
