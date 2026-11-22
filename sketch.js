let scene = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();
  push();
  translate(width / 2, height / 2);  
  push();
  rotate(45);
  // if(frameCount%3 == 0){
  //   scene = !scene;
  // }
  let maxSize = ceil((width + height) / 10) * 10;

  for (let i = maxSize; i > 0; i -= 10) {
    let even = (i % 20 == 0);
    if (scene) {
      fill(even ? "black" : "white");
    } else {
      fill(even ? "white" : "black");
    }
    square(0, 0, i);
  }
  pop();
  fill("red");
  square(0, 0, 10);
  pop();
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
