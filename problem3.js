// Create a simple grid system as seen in the attached picture.
//     Next create four h2 tags with four different sentences
// in them in your main section. Create one font size function
// that can change the fontsize of anything you click to “1px”.
// Use classlist to change the fontsize.

var changeThis = document.getElementsByTagName("h2");


function changeText(e)
{
    console.log("test");
    e.target("fontChange");

}

changeThis.addEventListener("mouseover", changeText);
