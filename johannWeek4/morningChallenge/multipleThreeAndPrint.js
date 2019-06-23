// Morning Challenge: Create a function that takes in three arguments. If the product of said arguments is a multiple of 24, convert the product to a string and then print that string x times to the console where x is the last argument given

// my attempt, does not run
function morningChallenge (x,y,z,) {
  if ((x*y*z)%24 === 0) {
    for (let i=1; i<=z; i++){
      console.log(x*y*z.toString())
    }
  }
}

// my modified
function morningChallenge (x,y,z,) {
  let product = x * y * z;
  if (product%24 === 0) {
    for (let i=1; i<=z; i++){
      console.log(product.toString())
    }
  }
}



// Leon's example;
function multipleThreeAndPrint(num1,num2,num3){
  if(num1*num2*num3 %24 === 0){
    // actually, cleaner BELOW
    // best practice to use === vs ==
    // don't use x y z, unclear. NUM1 NUM2 NUM3.
  }

}

  function multipleThreeAndPrint(num1,num2,num3){
    let product = num1 * num2 * num3
    if( product % 24 === 0 ){
      product = product.toString()
      for(let i = 1; i <= num3; i++){
        console.log(product)
      }
    } else {
      console.log("NOT VALID")
    }
  }

//
// Console:
// multipleThreeAndPrint(2,12,2)
// "48"
// "48"
// undefined
// multipleThreeAndPrint(24,24,12)
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
// "6912"
