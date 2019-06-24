document.querySelector("h1").addEventListener("click", jamOnIt)
// change to querySelectorAll and test

function jamOnIt(){
  document.getElementsByTagName("h1")[0].className += "makeRed"
  // vs
  // to get all elements like this....and not just one from the index
  // MUST USE .querySelectorAll
  // NOT POSSIBLE, document.getElementsByTagName("h1").className += "makeRed"
  //.getElementsByTagName("h1")[0] always selects only ONE from the index

// reall though????? research more....MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
  // .getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.

  // -------------OR---------------
  // document.getElementsByTagName("h1")[0].style.color = "red";
  // document.getElementsByTagName("h1")[0].style.backgroundColor = "gray";
  // document.getElementsByTagName("h1")[0].style.backgroundColor = "gray";

  // -------------OR---------------
  // document.querySelector("h1").classList.toggle("makeRed");
  // toggles ON/OFF h1 having class of .makeRed
}
// ^^DONT FORGET TO ACTIVATE THIS CURLY BRACES
// ^^DONT FORGET TO ACTIVATE THIS CURLY BRACES
// ^^DONT FORGET TO ACTIVATE THIS CURLY BRACES



// the ABOVE^^^^
// toggle ON/OFF
// .querySelector("h1" or ".class" or "#id")
// it's flexible targeting
// querySelector(just first one in "array")
// vs querySelectorAll (all the elements with this selector)




// this program console.logs the attributes/values of data-bet from either h2BetMin or h2BetMax depending on which one is clicked
// $h2.forEach
// does to all h2s

// const $h2 = document.querySelectorAll("h2")
//
// $h2.forEach(function(elem){
//   elem.addEventListener("click",jamOnIt);
// });
//
// function jamOnIt(){
//   const dataValue = this.getAttribute("data-bet")
//   console.log(dataValue)
// }
