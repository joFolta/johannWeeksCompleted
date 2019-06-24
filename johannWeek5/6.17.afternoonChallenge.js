*ONE*
Create a horoscope app where the user can enter their birthday and get their horoscope. There should be minimum 12 unique horoscopes.
*TWO*
Create a function that takes in two numbers - number of dice and the number of sides each die has in total. Console log the results of a random roll for each die. Example, if the user enters 3,6 you would see in the console:
2
5
4


*ONE*
Create a horoscope app where the user can enter their birthday and get their horoscope. There should be minimum 12 unique horoscopes.

function horoscope (month,day){
 let date = (month*100)+day;
 if (date>= 1222 || date<=119) {
  console.log("Capricorn")
}
  else if (date >=120 && date <=218) {
    console.log( "Aquarius | Be water")
}
  else if (date >= 219 && date <= 320) {
    console.log ("Pisces | Embrace the Void")
  }

 else if (date >= 321 && date <= 419){
   console.log("Aries | You are feeling poweful. Go and do it.")
 }

 else if (date >= 420 && date <= 520){
   console.log("Taurus | Love appears close, but beware.")
 }

 else if (date >= 521 && date <= 620){
   console.log("Gemini | Persistence will bring plentiful fruit during this difficult time.")
 }

  else if (date >= 621 && date <= 722){
    console.log("Cancer | Today is an 8 -- Begin an exploratory phase. The Full Moon illuminates a shift in your educational direction. Experiment with concepts. Go to the source. Learn from a master.")
  }

  else if (date >= 723 && date <= 822){
    console.log("Leo | You might need to be completely frank with a friend or colleague to settle a thorny issue today. Unfortunately, this awkward conversation may trigger a time-consuming drama, but any other strategy leads to harder feelings down the line. ")
  }

  else if (date >= 823 && date <= 922){
    console.log("Virgo")
  }

  else if (date >=923 && date <=1022){
    console.log("Libra")
  }

  else if (date >=1023 && date <=1121){
    console.log("Scorpio | Monday’s particularly material full moon could tempt you to do something silly and most likely it will be something that costs you money that you can ill afford to lose. Now that you know that, of course, you will be able to successfully police your words and actions.")
  }

  else if (date >=1122 && date <=1221){
    console.log("Sagittarius")
  }

  else {
    alert("Please enter a valid date!")
  }


} //Closing function bracket!






// *TWO*
// Create a function that takes in two numbers - number of dice and the number of sides each die has in total. Console log the results of a random roll for each die. Example, if the user enters 3,6 you would see in the console:
// 2
// 5
// 4





// 2 ways

function multDiceMultSides(multDice, multSides){
    for(let i = 1; i <= multDice; i++){
      console.log(Math.ceil(Math.random()*multSides))
    }
}

multDiceMultSides(20,6)




function multDiceMultSides(multDice, multSides){
    let eachRoll
    for(let i = 1; i <= multDice; i++){
      eachRoll = Math.random()
      eachRoll = eachRoll*multSides
      eachRoll = Math.ceil(eachRoll)
      console.log(eachRoll)
    }
}

multDiceMultSides(20,6)











// >>>>>>
