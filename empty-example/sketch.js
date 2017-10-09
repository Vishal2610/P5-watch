function setup() {
    createCanvas(650, 650);
    angleMode(DEGREES);
}

function draw(){
    background(150, 150, 150);
    translate(300, 300);
    rotate(-90);

    let hr = hour();
    let min = minute();
    let sec = second();

    strokeWeight(8);
    stroke(255,125,255);
    noFill();
    let secHand = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secHand);
    
    push();
    rotate(secHand);
    stroke(255,125,255);
    line(0, 0, 100, 0);
    pop();

    strokeWeight(8);
    stroke(125, 255, 255);
    noFill();
    let minHand = map(min, 0, 60, 0, 360);
    arc(0, 0, 275, 275, 0, minHand);

    push();
    rotate(minHand);
    stroke(125, 255, 255);
    line(0, 0, 80, 0);
    pop();

    strokeWeight(8);
    stroke(255, 255, 125);
    noFill();
    let hrHand = map(hr, 0, 60, 0, 360);
    arc(0, 0, 250, 250, 0, hrHand);

    push();
    rotate(hrHand);
    stroke(255, 255, 125);
    line(0, 0, 60, 0);
    pop();

    stroke(150);
    line(0, 0, 0, 0);

}