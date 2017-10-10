function setup() {
    createCanvas(650, 650);
    angleMode(DEGREES);
}

function draw(){
    background(0, 0, 0);
    translate(300, 300);
    rotate(-90);

    let hrs = hour();
    let mins = minute();
    let sec = second();

    if(sec < 10)  sec = '0' + sec;
    if(mins < 10)  mins = '0' + mins;

    let s = sec * 0.0166;
	  let min = mins +  s;
	  let hr = hrs + "." + mins ;
    //console.log(s +":"+min+":"+hr);
    //console.log(s + " : " + min);
    //console.log(min);
    //console.log(min + ":" + hr );

    strokeWeight(8);
    stroke(255,75,255);
    noFill();
    let secHand = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secHand);

    push();
    rotate(secHand);
    stroke(255,75,255);
    line(0, 0, 100, 0);
    pop();

    strokeWeight(8);
    stroke(75, 255, 255);
    noFill();
    let minHand = map(min, 0, 60, 0, 360);
    arc(0, 0, 275, 275, 0, minHand);

    push();
    rotate(minHand);
    stroke(75, 255, 255);
    line(0, 0, 80, 0);
    pop();

    strokeWeight(8);
    stroke(255, 255, 75);
    noFill();
    let hrHand = map(hr%12, 0, 12, 0, 360);
    arc(0, 0, 250, 250, 0, hrHand);

    push();
    rotate(hrHand);
    stroke(255, 255, 75);
    line(0, 0, 60, 0);
    pop();

    stroke(0);
    line(0, 0, 0, 0);

}
