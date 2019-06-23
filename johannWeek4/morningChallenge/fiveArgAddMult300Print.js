// Morning Challenge: Create a function that takes in 5 arguments. If the first argument is even multiply the numbers. If the first argument is odd, add all the numbers. If the result is over 300, print the result to the console x times where x is the 3rd argument. If the result is under 300, print the result to the console x times where x is the 4th argument.
//

// my attempt

function print300Num3Num4 (num1, num2, num3, num4, num5) {
  if (num1%2 === 0) {
    let combinedNums = num1 * num2 * num3 * num4 * num5;
    if (combinedNums >= 300) {
      for(i = 1; i <= num3; i++){
        console.log(combinedNums);
      }
    }
    else {
      for(i = 1; i <= num4; i++){
        console.log(combinedNums);
      }
    }
  }
  else /*if (num1%2 !== 0)*/ {
    let combinedNums = num1 + num2 + num3 + num4 + num5;
    if (combinedNums >= 300) {
      for(i = 1; i <= num3; i++){
        console.log(combinedNums);
      }
    }
    else {
      for(i = 1; i <= num4; i++){
        console.log(combinedNums);
      }
    }
  }
}

// result, (WORKS)

// print300Num3Num4 (2, 100, 5, 10, 100)
// 1000000
// 1000000
// 1000000
// 1000000
// 1000000

// print300Num3Num4 (1, 100, 5, 10, 100)
// 216
// 216
// 216
// 216
// 216
// 216
// 216
// 216
// 216
// 216

////////////////////////////////////////////////////////////////////////////////
// My improved solution



// outside of ABOVE, IMPORTANT TO DEFINE BEFORE  function

function print300Num3Num4 (num1, num2, num3, num4, num5) {
  if (num1%2 === 0) {
    let combinedNums = num1 * num2 * num3 * num4 * num5;
    check300PrintNum3Num4Times (combinedNums);


  }
  else /*if (num1%2 !== 0)*/ {
    let combinedNums = num1 + num2 + num3 + num4 + num5;
    check300PrintNum3Num4Times (combinedNums);


  }

  function check300PrintNum3Num4Times (combinedNums) {
    if (combinedNums >= 300) {
      for(i = 1; i <= num3; i++){
        console.log(combinedNums);
      }
    }
    else {
      for(i = 1; i <= num4; i++){
        console.log(combinedNums);
      }
    }

    // no need for return
  }
}







////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Leon's example
// POOR FUNCTION B/C MULTIPLE STEPS
// EACH STEP SHOULD BE A SEPARATE FUNCTION (IE. FUNCTIONcheckIfEven; FUNCTIONcheckif300GreaterOrLess; FUNCTIONproduct; FUNCTIONsum)

function multiOrAddCheckResult(num1, num2, num3, num4, num5){
  // result is defined out side of if-conditional below, so that it's scope is beyond the if-conditional
  let result = 0;
  if (num1 % 2 === 0){
    result = num1 * num2 * num3 * num4 * num5

    // test each step
    console.log(result)

  } else if (num1 % 2 !== 0 && typeof num1 !== "string"){
    result = num1 + num2 + num3 + num4 + num5

    // test each step
    console.log(result)

  } else {
    alert("Please enter a valid number")
  }

  if(result > 300){
    for(let i = 1; i<= num3; i++){
      console.log(result)
    }
  } else if (result <300){
    for(let i = 1; i<= num4; i++){
      console.log(result)
    }
  } else {
      alert("MONTANA 300 Chiraq REMIX == BARS")
  }
}


//
// multiOrAddCheckResult("frog", 3, 4, 8, 9)
// alert("Please enter a valid number")
//
// multiOrAddCheckResult (22, 3, 3, 8, 9)
// 14256
// 14256
// 14256
// 14256
//
// multiOrAddCheckResult(1, 1, 1, 1, 296)
// alert("MONTANA 300 Chiraq REMIX == BARS")
//












// Morning Challenge: Create a function that takes in 5 arguments. If the first argument is even multiply the numbers. If the first argument is odd, add all the numbers. If the result is over 300, print the result to the console x times where x is the 3rd argument. If the result is under 300, print the result to the console x times where x is the 4th argument.
//






























.
