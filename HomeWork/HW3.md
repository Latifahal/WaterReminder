# HomeWork 3
### Homework:
 1. Research on DOM.
 2. Research on DOM selectors, show me practice. 
 3. also write the information in the form of comments.
-----

##### DOM is a programming interface that allows you to interact with and manipulate the content and structure of a web page in a dynamic way, it provides a way for scripts to access and modify the elements and attributes of a document, update the content displayed to the user, and respond to user interactions.
-----

1. The Document Object: 
the top level obj in DOM, it represents the entire web page and provides methods and prpoerties for interacting with the doc. 
___

``` js
// Access the document object
const doc = document;
```
---

2. The DOM Elements: HTML elements such as <p>..etc, are represented as objects in the DOM. you can access and manipulate these elments using javaScript.
---
``` js
// Access an element by its ID
const element = document.getElementById("myElement");

// Change the text content of an element
element.textContent = "New content";

// Add a CSS class to an element
element.classList.add("highlight");
```
---

3. DOM Events : you can attach event listener to DOM elements to respond to user interactions like clicks, keypresses, and mouse movements. 
---
``` js
// Add a click event listener to a button element
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```
---

4. DOM Manipulation: You can create, modify, and delete DOM elements dynamically using JavaScript.
``` js
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
```

# Practice

``` js
// id selection
const myDiv = document.getElementById('idSlct');

// manipulation 
idSlct.innerHTML = 'the IDSelector content has beenmanipulated';

// class selection
const classSlct = document.getElementsByClassName('classSlct');
const classSlct = document.querySelector(".classSlct")

// manipulation 
classSlct.innerHTML = 'the content have been manipulated';
```

[Home Work 4 on HW4.md!](HW4.md)