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




