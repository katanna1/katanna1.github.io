function scriptTest(){
    alert("Script is running!")
}

function printDate(){
    var today = new Date();
    document.write(today.toDateString());
}

function printTime() {
    var today = new Date();
    document.write(today.toLocaleTimeString());
}

window.getMood = function(form) {
    var fname = form.fname.value;
    var mood = form.mood.value;
    document.write("Wilson Enterprises welcome you, "+ fname + ". We are glad you are doing "+ mood +"!");
    
}

function updateGreeting() {
    var fname = document.getElementById("fname").value;
    var mood = document.getElementById("mood").value;
    
    greeting = "Wilson Enterprises welcome you, " + fname + ". We are glad you are feeling " + mood + "!";
}

function update(){
    var fname = document.getElementById("fname").value;
    var mood = document.getElementById("mood").value;
    document.getElementById("mood").value = "chan";
    document.write("Wilson Enterprises welcome you, "+ fname + ". We are glad you are doing "+ mood +"!");

}

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!