
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0,0,0);  
  
  translate(200, 200);
  rotate(-90);
//calculating time using predefined functions from p5.js
  hr = hour();
  mn = minute();
  sc = second();
 

  //to create iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr%12, 0, 12, 0, 360);
  

  
//drawing seconds hand
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 0, -140);
  pop()

  //drawing minutes hand
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 0, -130);
  pop()

  //drawing hours hand
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 0, -90);
  pop()

  stroke(255, 0, 255);
  point(0,0);

  //drawing arcs
  strokeWeight(10);
  noFill();
  //seconds
  stroke(255, 0, 0);
  arc(0,0,360,360, -90,scAngle -90);

  //minutes
  stroke(0, 255, 0);
  arc(0,0,340,340, -90, mnAngle -90);

  //hours
  stroke(0, 0, 255);
  arc(0,0,320,320,-90,hrAngle -90);
}