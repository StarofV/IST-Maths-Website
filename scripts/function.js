//Variables
var name;
var questionsAnswered = 0;

//Ready function
$(document).ready(function(){
    $('#choices').hide();
    $('#nameButton').click(nameGrab);
    $('#Addition').click(addition);
});

//A function that grabs the users name
function nameGrab(){
    name = $('#name').val(); //Storing the value of the box into a variable.
    console.log(name);
    showHide('#EnterName', 500); //Calling the showHide function in order to toggle the state of the box.
    document.getElementById('user').innerHTML = "Logged in as " + name; //injecting the user's name into the HTML
    showHide('#choices', 500);
}
function addition(){
    var no1 = Math.round((Math.random()*100)+1)
    var no2 = Math.round((Math.random()*100)+1)
    RandomQuestion = no1 +" + "+no2;
    questions = [ //An array filled with objects. Each object is a question with a string and a question
        question1 = {
            question: "1 + 1",
            answer: 1 + 1
        },
        question2 = {
            question: "50 + 35",
            answer: 50 + 35
        },

        question3 = {
            question: "19 + 38",
            answer: 19 + 18
        },
        
        question4 = {
            question: "16 + 69",
            answer: 16 + 69
        },

        question5 = {
            question: "50 + 50",
            answer: 50 + 50
        },

        question6 = {
            question: "20 + 29",
            answer: 29 + 20
        },

        question7 = {
            question: "10 + 10",
            answer: 10 + 10
        },
        question8 = {
            question: "16 + 69",
            answer: 16 + 69
        },
        question9 = {
            question: "16 + 69",
            answer: 16 + 69
        },
        question10 = {
            question: "16 + 69",
            answer: 16 + 69
        },
    ];
    
    if(questionsAnswered === 0){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 1){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 2){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 3){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 4){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 5){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 6){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 7){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 8){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else if(questionsAnswered === 9){
        document.getElementById('output').innerHTML = questions[questionsAnswered].question;
        questionsAnswered++;
    }
    else{
        console.log(RandomQuestion);
        document.getElementById('output').innerHTML = RandomQuestion;
    }
    
        
}
//A function that uses the jquery show and hide functions
function showHide(Area, duration){      //Area is a string and Duration is a integer
    $(Area).toggle(duration);
}

