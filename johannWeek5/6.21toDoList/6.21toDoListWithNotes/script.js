// # TO DO'S LEFT
function runCount(){
  document.getElementById("count").innerHTML = count()
  function count(){
    let allItems = document.querySelectorAll("li").length
    let completedItems = document.querySelectorAll(".completed").length
    let remainingItems = allItems - completedItems
    return remainingItems;
  }
}

// 2 ways
// document.getElementById("count").innerHTML = count()
// OR
// document.getElementsByTagName("span")[0].innerHTML = count()
// https://stackoverflow.com/questions/18224727/count-the-number-of-displayed-elements-in-a-html-list/19987606

// ADD LIST ITEM
document.getElementById('buttonAddToList').onclick = function addToList(){
  let newText = document.getElementById('userInput').value;
// shorthand
  let ul = document.getElementById("listToAddTo");
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(newText));
  // newLi.setAttribute("class", "attributeClassNewLi")
  ul.appendChild(newLi);
  newLi.onclick= completedItems

  runCount()
}

// longhand, no newLi & ul variables
// PROBLEM with line directly below...
  // newLi.appendChild(document.createTextNode(newText));
  // document.getElementById("listToAddTo").appendChild(document.createElement("li"));

// https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript

// TOGGLE COMPLETED
function completedItems (){
  this.classList.toggle("completed");

  runCount()
}
// why does this work??? not the below.
// document.getElementsByClassName("attributeClassNewLi").classList.toggle("completed");

// CLEAR LIST
document.getElementById("buttonClearList").onclick = function clearList(){
  let completed = document.querySelectorAll("li");
  completed.forEach(function(element) {
    element.parentNode.removeChild(element);
    runCount()
  });
}

// CLEAR COMPLETED
document.getElementById("buttonClearCompleted").onclick = function clearCompleted(){
  let completed = document.querySelectorAll(".completed");
  completed.forEach(function(element) {
    element.parentNode.removeChild(element);
  });
}
// https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name
