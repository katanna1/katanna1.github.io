function printDate(){
    var today = new Date();
    document.write(today.toDateString());
}

function printTime() {
    var today = new Date();
    document.write(today.toLocaleTimeString());
}