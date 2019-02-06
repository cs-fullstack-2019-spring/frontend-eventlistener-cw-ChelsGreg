// create variable to work through HTML elements
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var getHeader = document.querySelector("changeHead");
var getHeader2 = document.querySelector("header");


// function for button 1 changing background to blue, number to one

function changeToBlue()
{
    console.log("test");
    getHeader.classList.toggle("backBlue");
    changeOne();

}

function changeOne()
{
    getHeader.textContent = "1";
}



// function for button 2 changing background to red, number to two

function changeToRed()
{
    console.log("test");
    getHeader2.classList.toggle("backRed");
    changeTwo();

}

function changeTwo()
{
    getHeader2.textContent = "2";

}


// calling button functions and event listeners

button1.onclick= changeToBlue;
button1.addEventListener('click', changeToBlue);


button2.onclick= changeToRed;
button2.addEventListener('click', changeToRed);

