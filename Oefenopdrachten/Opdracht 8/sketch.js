function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(150);
  house(10,50,50,50,33,10)
  }

function house(a,b,c,d,e,f,g,h) {
  rect(a,b,c,d)
  triangle(a,b,a+c,b,e,f)
}