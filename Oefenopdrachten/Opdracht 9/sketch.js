let balls = []



function setup() {
  createCanvas(400, 400);
  for(i = 0; i < 10; i++) {
    let ball = {
      x: random(width),
      y: random(height),
      size: random(10, 50)
      
    }
  }
}

function draw() {
  background(150);
}
