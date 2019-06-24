

let rotateAmt = 0;

document.getElementsByClassName("box1norm")[0].onclick =flipbox1;
document.getElementsByClassName("box1norm")[1].onclick =flipbox2;
document.getElementsByClassName("box1norm")[2].onclick =flipbox3;

 function flipbox1 (){
   rotateAmt = rotateAmt + 45
 let flip1 = document.getElementsByClassName("box1norm")[0];
   flip1.style.transform = "rotate("+rotateAmt+"deg)"
 }

 function flipbox2(){
   rotateAmt += 45
 let flip2 = document.getElementsByClassName("box1norm")[1];
     flip2.style.transform = "rotate("+rotateAmt+"deg)"
}

 function flipbox3(){
   rotateAmt += 45
let flip3 = document.getElementsByClassName("box1norm")[2];
   flip3.style.transform = "rotate("+rotateAmt+"deg)"
   if (rotateAmt>=135){
   }
      }
