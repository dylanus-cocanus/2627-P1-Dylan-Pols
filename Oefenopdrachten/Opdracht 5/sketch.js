function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 3; i++) {
    rect(50 + (i * 50),50 + (i * 50),50,50)
  }
}
