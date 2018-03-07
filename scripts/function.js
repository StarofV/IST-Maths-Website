//Variables
var name;

//Ready function
$(document).ready(function(){
    $('#nameButton').click(nameGrab);
});

//A function that grabs the users name
function nameGrab(){
    name = $('#name').val(); //Storing the value of the box into a variable.
    console.log(name);
    showHide('#EnterName', 2000); //Calling the showHide function in order to toggle the state of the box.

    document.getElementById('user').innerHTML = "Logged in as " + name; //injecting the user's name into the HTML
}

//A function that uses the jquery show and hide functions
function showHide(Area, duration){      //Area is a string and Duration is a integer
    $(Area).toggle(duration);
}

