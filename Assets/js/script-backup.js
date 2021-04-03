
//Add current date & time at the top of the planner 

var currentDate = moment().format('dddd Do MMMM, ');
var currentTime = moment().format('hh:mm a');
$('#currentDay').text(currentDate + currentTime);

// // Retreives local stroage 
// var userEntry09 = localStorage.getItem("entry09");
// userEntry09.innerHTML = JSON.parse(entry09);

//Set the calendar to change the colour of the timeblock to indicate whether it is in the past, present or future

var userEntry09 = document.querySelector("#nine");
var userEntry10 = document.querySelector("#ten");
var userEntry11 = document.querySelector("#eleven");
var userEntry12 = document.querySelector("#twelve");
var userEntry13 = document.querySelector("#thirteen");
var userEntry14 = document.querySelector("#fourteen");
var userEntry15 = document.querySelector("#fifteen");
var userEntry16 = document.querySelector("#sixteen");
var userEntry17 = document.querySelector("#seventeen");
var todotext9 = document.querySelector("#todo-text9");
var saveButton = document.querySelector('#saveBtn');
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var nine = [];

saveBtn09.addEventListener("click", function (event) {
    event.preventDefault();
    var data09 = userEntry09.value;
    var newEntry09 = JSON.stringify(data09);
    console.log(data09, newEntry09);
    localStorage.setItem("entry09", newEntry09);
});

saveBtn10.addEventListener("click", function (event) {
    event.preventDefault();
    var newEntry10 = JSON.stringify(userEntry10);
    localStorage.setItem("entry10", newEntry10);
});


// function renderEntry() {
//     // Clear todoList element and update todoCountSpan
//     todotext9.innerHTML = "";
//     nine.textContent = todo-text9;
//   }
  
//   // This function is being called below and will run when the page loads.
//   function init() {
//     // Get stored todos from localStorage
//     var storedEntries = JSON.parse(localStorage.getItem("nine"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedEntries !== null) {
//       nine = storedEntries;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderEntry();
//   }
  
//   function storedEntries() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("nine", JSON.stringify(nine));
//   }
  
//   // Add submit event to form
//   saveBtn09.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var todoEntry09 = todotext9.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoEntry09 === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     nine.push(todoEntry09);
//     todotext9.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storedEntries();
//     renderEntry();
//   });
  
//   // Add click event to todoList element
//   todotext9.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//      nine.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storedEntries();
//       renderEntry();
//     }
//   });
  
  // Calls init to retrieve data and render it to the page on load
  init()
  

// function saveEntry(){

// }


//Allow for an event to be entered and to save the event in local storage