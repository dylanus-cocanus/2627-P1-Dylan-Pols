let balls = []



function setup() {
  createCanvas(400, 400);
  for(i = 0; i < 10; i++) {
    let ball = {
      x: random(width),
      y: random(height),
      size: random(10, 50)
    
    }
    balls.push(ball)
  }
}

function draw() {
  background(150);
for(i = 0; i < balls.length; i++) {
  balls[i]
  circle(ball)
}
}
