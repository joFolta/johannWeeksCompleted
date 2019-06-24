// Afternoon Challenge:
//Create three boxes in your HTML / CSS

//Click on a box and have it rotate (45+ degrees each click)

//On the third click of each box change the color of the other two boxes

//On a click of a box, turn that box into a circle and have it move to the right


// <------------------shorthand TRANSFORM ROTATION---------------------------->
let rotationdegrees = 0
const boxOne = document.getElementById("boxOne")

  boxOne.onclick = function(){
  rotationdegrees = rotationdegrees + 45
  boxOne.style.transform = "rotate("+rotationdegrees+"deg)"
}


// <---SAMPLE-------thirdClickOthersColor-------SAMPLE----------------->
document.getElementById("boxOne").addEventListener('click',
  function (numClickEvents) {
      if (numClickEvents.detail === 3){
        document.getElementById("boxTwo").style.backgroundColor = "yellow"
        document.getElementById("boxThree").style.backgroundColor = "yellow"
    }
  }
)


// <------------------borderRadius & translateX---------------------------->
const boxThree = document.getElementById("boxThree")

boxThree.onclick = function(){
  boxThree.style= "border-radius: 50%"
  boxThree.style.transform = "translateX(50px)"
}
