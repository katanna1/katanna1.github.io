function setup() {
    createCanvas(800,600);
    background(0);

}

function draw() {
    if (mouseIsPressed) {
        fill(255);
    } else {
        fill(0);
    }
    ellipse(mouseX, mouseY, 15, 20);
}