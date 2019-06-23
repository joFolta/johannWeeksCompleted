// // INTRODUCTION TO JAVASCRIPT
// Dog Years
// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
//
// Here’s how you convert your age from “human years” to “dog years”:
//
// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.
// Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
//
// // If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

// My attempt without instructions
// Copy to Browser Console to View Results
var hmYrs = 30;
	console.log("hmYrs = " + hmYrs);
firstTwoYears = 2;
	console.log("firstTwoYears = " + firstTwoYears);
hmYrs = 30 - firstTwoYears;
	console.log("hmYrs = " + hmYrs);
const firstTwoYearsInDog = firstTwoYears * 10.5;
	console.log("firstTwoYearsInDog = " + firstTwoYearsInDog);
hmYrs = hmYrs * 4;
	console.log("hmYrs = " + hmYrs);
var dogYrs = hmYrs + firstTwoYearsInDog;
	console.log("My human age in dogYrs is " + dogYrs);

// My attempt per instructions
var myAge = 30;
var earlyYears = 2;
earlyYears *= 10.5;
var laterYears = myAge - 2;
laterYears *= 4;
myAgeInDogYears = earlyYears + laterYears;
	console.log("myAgeInDogYears = " + myAgeInDogYears);
myName = "John Snow".toLowerCase();
	console.log("myName = " + myName);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
