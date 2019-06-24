/* Create three boxes in your HTML / CSS
Click on a box and have it rotate (45+ degrees each click)
On the third click of each box change the color of the other two boxes
after each step comment it out and move to the next
On a click of a box, turn that box into a circle and have it move to the right*/

//changes color of the boxes
//variable so that you dont have to type this over and over
const box1 = document.getElementById("box-1");

box1.addEventListener('click', function (evt) {
  //anonymous function(not declared, just run)
  //what does function evt do
  //increments rotation modulus prevents it from incrementing into infinity resets to 0
  box1.rotation = ((box1.rotation || 0) + 45) % 360
  //.rotation not defined(UNDEFINED) property; defining right here.
  //cocatenating string building a string
  //.style accesses the css, .trans = moves it
  box1.style.transform = "rotate(" + box1.rotation + "deg)";
                       // = `rotate(${box1.rotation}deg)`
                       // STYLE targets CSS transform "rotate(0deg)"
                       // CSS equivalent
                      //#box-1 {
                      //   transform: rotate(0deg);
                      // }
   if (evt.detail === 3) {
      changeColorBoxOne ()
      rotateBoxOne ()
      moveRight ()
   }
 });

 document.getElementById("box-2").addEventListener('click', function (evt) {
    if (evt.detail === 3) {
       changeColorBoxTwo ()
    }
  });

  document.getElementById("box-3").addEventListener('click', function (evt) {
     if (evt.detail === 3) {
        changeColorBoxThree ()
     }
   });


function changeColorBoxOne () {
  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");
  box1.style.backgroundColor = "blue";
  box2.style.backgroundColor = "red";
  box3.style.backgroundColor = "red";
}

function changeColorBoxTwo () {
  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");
  box1.style.backgroundColor = "red";
  box2.style.backgroundColor = "blue";
  box3.style.backgroundColor = "red";
}

function changeColorBoxThree () {
  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");
  box1.style.backgroundColor = "red";
  box2.style.backgroundColor = "red";
  box3.style.backgroundColor = "blue";
}

function rotateBoxOne () {
  var box1 = document.getElementById("box-1");
  //box1.style.transform = "rotate(45deg)";
  box1.className="box-rotate"

}
function moveRight (){
  var box1 = document.getElementById("box-1");
  box1.className += " move-right"
}
