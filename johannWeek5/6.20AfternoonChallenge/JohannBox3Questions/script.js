// Afternoon Challenge:
//Create three boxes in your HTML / CSS

//Click on a box and have it rotate (45+ degrees each click)

//On the third click of each box change the color of the other two boxes

//On a click of a box, turn that box into a circle and have it move to the right

// consulted site:
// https://stackoverflow.com/questions/19126432/rotate-a-div-using-javascript



// <------------------longhand TRANSFORM ROTATION---------------------------->
// let rotationdegrees = 0
//
// document.getElementById("boxOne").onclick = function(){
//   rotationdegrees = rotationdegrees + 45
//   console.log(rotationdegrees)
//   document.getElementById("boxOne").style.transform = "rotate("+rotationdegrees+"deg)"
//   "rotate(45deg)"
// }

// <------------------shorthand TRANSFORM ROTATION---------------------------->
// let rotationdegrees = 0
// const boxOne = document.getElementById("boxOne")
//
//   boxOne.onclick = function(){
//   rotationdegrees = rotationdegrees + 45
//   boxOne.style.transform = "rotate("+rotationdegrees+"deg)"
// }



// <---SAMPLE-------thirdClickOthersColor-------SAMPLE----------------->
// document.getElementById("boxOne").addEventListener('click',
//   function (numClickEvents) {
//       if (numClickEvents.detail === 3){
//         document.getElementById("boxTwo").style.backgroundColor = "yellow"
//         document.getElementById("boxThree").style.backgroundColor = "yellow"
//     }
//   }
// )

// <------------------thirdClickOthersColor---------------------------->
// const boxOne = document.getElementById("boxOne")
// const boxTwo = document.getElementById("boxTwo")
// const boxThree = document.getElementById("boxThree")
//
//
// boxOne.addEventListener('click', function (numClickEvents) {
//    if (numClickEvents.detail === 3){
//        boxTwo.style.backgroundColor = "yellow"
//        boxThree.style.backgroundColor = "yellow"
//
//     }
//   }
// )
//
// boxTwo.addEventListener('click', function (numClickEvents) {
//    if (numClickEvents.detail === 3){
//        boxOne.style.backgroundColor = "purple"
//        boxThree.style.backgroundColor = "purple"
//
//     }
//   }
// )
//
// boxThree.addEventListener('click', function (numClickEvents) {
//    if (numClickEvents.detail === 3){
//        boxOne.style.backgroundColor = "red"
//        boxTwo.style.backgroundColor = "red"
//
//     }
//   }
// )
// // <------------------borderRadius & translateX---------------------------->
// const boxThree = document.getElementById("boxThree")
//
// boxThree.onclick = function(){
//   boxThree.style= "border-radius: 50%"
//   boxThree.style.transform = "translateX(50px)"
// }
