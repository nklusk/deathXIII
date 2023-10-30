let deathSpiral;
let angle = 0;

function preload(){
  deathTitleText = loadImage("assets/deathTitleText.png");
  deathSpiral = loadImage("assets/deathSpiral.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(31, 63, 49);
  imageMode(CENTER);
  image(deathTitleText, windowWidth/2, windowHeight/3);
  angleMode(DEGREES);
}



function draw() {
  background(canvas);

  push();
  translate(width/2, height);
  rotate(45);
  rotate(frameCount/10);
  image(deathSpiral, 0, 0);
  pop();

  
}
