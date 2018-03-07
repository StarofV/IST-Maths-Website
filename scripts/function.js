//Variables
var name;

//Ready function
$(document).ready(function(){
    $('#nameButton').click(nameGrab);
});

//A function that grabs the users name
function nameGrab(){
    name = $('#name').val();
    console.log(name);
    showHide()
}

//A function that uses the jquery show and hide functions
function showHide(Area, duration){      //Area is a string and Duration is a integer
    $(Area).toggle(duration);
}