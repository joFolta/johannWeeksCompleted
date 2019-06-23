// Magic Eight Ball
// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
//
// In this project we will build the Magic Eight Ball using control flow in JavaScript.
//
// The user will be able to input a question, then our program will output a random fortune.









let userName = "Johann";

// if (userName) {
//   console.log(`Hello, ${userName}!`);
// } else {console.log("Hello!");
// }

// ternary operator if/else username is true
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "'Will I be able to own a motorcycle again one day?'";

console.log(`${userName} asks: ${userQuestion}`);

// create random number (0-7)
let randomNumber = Math.floor(Math.random() * 8);
console.log(`Random, non-mystical number of ${randomNumber}`);

let eightball = "";

switch(randomNumber){
  case 0:
    eightball ='It is certain';
    break;
  case 1:
    eightball ='It is decidedly so';
  case 2:
		eightball ='Reply hazy try again';
    break;
  case 3:
    eightball ='Cannot predict now';
    break;
  case 4:
    eightball ='Do not count on it';
    break;
  case 5:
    eightball ='My sources say no';
    break;
  case 6:
    eightball ='Outlook not so good';
    break;
  case 7:
    eightball ='Signs point to yes';
    break;
}
console.log(eightball);


// Example Output
// Hello, Johann!
// Johann asks: 'Will I be able to own a motorcycle again one day?'
// Random, non-mystical number of 5
// My sources say no



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// if else version


let userName = "Johann";
// ternary operator if/else username is true

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "'Will I be able to own a motorcycle again one day?'";

console.log(`${userName} asks: ${userQuestion}`);

// create random number (0-7)
let randomNumber = Math.floor(Math.random() * 8);
console.log(`Random, non-mystical number of ${randomNumber}`);

let eightball = "";

if (randomNumber === 0) {
  eightball = 'It is certain';
} else if (randomNumber === 1) {
  eightball ='It is decidedly so';
} else if (randomNumber === 2) {
  eightball ='Reply hazy try again';
} else if (randomNumber === 3) {
  eightball ='Cannot predict now';
} else if (randomNumber === 4) {
  eightball ='Do not count on it';
} else if (randomNumber === 5) {
  eightball ='My sources say no';
} else if (randomNumber === 6) {
  eightball ='Outlook not so good';
} else if (randomNumber === 7) {
  eightball ='Signs point to yes';
}

console.log(eightball);
