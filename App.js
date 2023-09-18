


//const percentage

//const remained


/***
 * Homework:
 * Research on DOM,
 * Research on DOM selectors, show me practice, also write the information in the form of comments
 */


/**
DOM is a programming interface that allows you to interact with and manipulate the content and structure of a web page in a dynamic way, it provides a way for scripts to access and modify the elements and attributes of a document, update the content displayed to the user, and respond to user interactions.
-----

1-The Document Object: the top level obj in DOM, it represents the entire web page and provides methods and prpoerties for interacting with the doc. 

// Access the document object
const doc = document;

--

2-The DOM Elements: HTML elements such as <p>..etc, are represented as objects in the DOM. you can access and manipulate these elments using javaScript.

// Access an element by its ID
const element = document.getElementById("myElement");

// Change the text content of an element
element.textContent = "New content";

// Add a CSS class to an element
element.classList.add("highlight");

--

DOM Events : you can attach event listener to DOM elements to respond to user interactions like clicks, keypresses, and mouse movements. 

// Add a click event listener to a button element
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});


--

4-DOM Manipulation: You can create, modify, and delete DOM elements dynamically using JavaScript.

// Create a new element
const newDiv = document.createElement("div");

// Set attributes for the new element
newDiv.setAttribute("id", "newDiv");
newDiv.textContent = "This is a new div";

// Append the new element to an existing element
document.body.appendChild(newDiv);

// Remove an element
const oldDiv = document.getElementById("oldDiv");
oldDiv.parentNode.removeChild(oldDiv);


 */

// // id selection
// const myDiv = document.getElementById('idSlct');

// // manipulation 
// idSlct.innerHTML = 'the ID Selector content has been manipulated';

// // class selection
// // const classSlct = document.getElementsByClassName('classSlct');
// const classSlct = document.querySelector(".classSlct")

// // manipulation 
// classSlct.innerHTML = 'the content have been manipulated';

const smallCups = document.querySelectorAll('.cup-small')
// console.log(smallCups);

const liters = document.getElementById("liters")
// console.log(liters);


const percentage = document.getElementById("percentage")

const remained = document.getElementById("remained");



// forEach loop

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
      // console.log("Cupnhas been clicked");
      // console.log(cup, idx);
      highlightCups(idx)
  })
})

// && AND
// || OR

function highlightCups(idx){
 
if(idx === 7 && smallCups[idx].classList.contains('full')){
  idx--
} else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
  idx--
}

  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx){
      cup.classList.add('full')
    } else{
      cup.classList.remove('full')

    }
  })
}



function updateBigCup(){
  const fullCups = document.querySelectorAll('.smallCups')
  const totalCups = document.querySelectorAll('.cups')
}





/***
 * Homework
 *  Practice, research and make notes on the following topics:
 * 
 * JS Data types (String, number, array, objects, booleans)
 * 
 * Variable and constants (var, let and const)
 * 
 * if and else statements in js 
 * Logiical operators
 * Relational operators
 * node list
 */


