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
  translate(300, 300);
  push();
  rotate(45);
  // if(frameCount%3 == 0){
  //   scene = !scene;
  // }
  if(scene == true){
    for(i = 1000; i > 0; i = i - 10){
        if(i%20 == 0){
          fill("black");
        } else {
          fill("white");
        }
        square(0, 0, i);
    }
  }
  if(scene == false){
    for(i = 1000; i > 0; i = i - 10){
        if(i%20 == 0){
          fill("white");
        } else {
          fill("black");
        }
        square(0, 0, i);
    }
  }
  pop();
  fill("red");
  square(0, 0, 10);
  pop();


}
