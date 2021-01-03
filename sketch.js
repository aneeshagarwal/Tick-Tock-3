var hr, mn, sc;
//var scAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
 
}

function draw() {
  background(0);

  translate(200,200);
  rotate (-90); 

  //push();
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(8);
  stroke("green");
  noFill();
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,280,280,0,mnAngle);

  strokeWeight(8);
  stroke("blue");
  noFill();
  let hrAngle = map(hr%12, 0, 12, -0, 360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(8);
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0,0,70,0)
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,50,0)
  pop();

  stroke("white");
  point(0,0)

  //push();
  rotate (90);
  textSize(70);
  stroke("white")
  //text("Current hour: \n" + hr, 200, 50);
  //text("Current minute: \n" + mn, 200, 150);
  //text("Current second: \n" + sc, 200,250);
  text(hr + " : " + mn + " : " + sc, 225,0);
 // pop();

  drawSprites();
}