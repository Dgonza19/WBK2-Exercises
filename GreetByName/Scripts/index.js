"use strict;"
console.log("start index.js");

window.onload = init;

function init(){
    console.log("start init")
    //this code will run when the browser has loaded the webpage.

    //Here we need to wire up our event handlers!  For this project, that means the 
    // greetTheUserBtn button's click event:

    const welcomeTheUserBtn = document.getElementById("welcomeTheUserBtn");
   welcomeTheUserBtn.onclick = welcomeTheUserBtnClicked;
    console.log("end init")
}

function welcomeTheUserBtnClicked(){
    //this code will run when the button is clicked...
    console.log("button clicked");
    const nameTextbox = document.getElementById("nameTextbox");
    let nameValue = nameTextbox.value;
    let message = "Hello, " + nameValue;

    const outputH1 = document.getElementById("outputH1");
    outputH1.innerHTML = message;


    //alert(message);

}