
function horoscope(){

 let month = document.getElementById('monthChoice').value
  month = parseInt(month)
 let day = document.getElementById('dayChoice').value
  day = parseInt(day)

if ((month === 12 && day >=21 && day <=31)||(month === 1 && day >=1 && day <=19)){
document.getElementById('result').innerHTML="capricorn"
}
else if ((month === 1 && day >=20 && day <=31)||(month === 2 && day >=1 && day <=19)){
document.getElementById('result').innerHTML="aquarius"
}
else if ((month === 2 && day >=20 && day <=30)||(month === 3 && day >=1 && day <=20)){
document.getElementById('result').innerHTML="pisces"
}
else if ((month === 3 && day >=21 && day <=31)||(month === 4 && day >=1 && day <=20)){
document.getElementById('result').innerHTML="aries"
}
else if ((month === 4 && day >=21 && day <=31)||(month === 5 && day >=1 && day <=20)){
document.getElementById('result').innerHTML="taurus"
}
else if ((month === 5 && day >=21 && day <=31)||(month === 6 && day >=1 && day <=20)){
document.getElementById('result').innerHTML="gemini"
}
else if ((month === 6 && day >=21 && day <=31)||(month === 7 && day >=1 && day <=22)){
document.getElementById('result').innerHTML="cancer"
}
else if ((month === 7 && day >=23 && day <=31)||(month === 8 && day >=1 && day <=22)){
document.getElementById('result').innerHTML="leo"
}
else if ((month === 8 && day >=23 && day <=31)||(month === 9 && day >=1 && day <=22)){
document.getElementById('result').innerHTML="virgo"
}
else if ((month === 9 && day >=23 && day <=31)||(month === 10 && day >=1 && day <=22)){
document.getElementById('result').innerHTML="libra"
}
else if ((month === 10 && day >=23 && day <=31)||(month === 11 && day >=1 && day <=22)){
document.getElementById('result').innerHTML="scorpio"
}
else if ((month === 11 && day >=23 && day <=31)||(month === 12 && day >=1 && day <=21)){
document.getElementById('result').innerHTML="sagitarius"
}else {
  alert("please enter valid number")
}
}
