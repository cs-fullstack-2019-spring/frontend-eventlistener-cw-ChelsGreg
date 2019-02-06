// creating variable to use button through
var quitHere = document.querySelector("button");

// creating a function for the button
function quitNow()
{
    do {
        questionUser = prompt("Would you like to quit? Press 'n' to Quit.");
    }
    while(questionUser !== "n");
}

// calling function
quitHere.onclick = quitNow;


