function setup() {
  createCanvas(400, 400);
}



function draw() {
  background(220);

  background('skyblue');

  // Style the circle using a color gradient.
    let myGradient = drawingContext.createRadialGradient(50, 50, 3, 50, 50, 40);
    myGradient.addColorStop(0, 'yellow');
    myGradient.addColorStop(0.6, 'orangered');
    myGradient.addColorStop(1, 'yellow');
    drawingContext.fillStyle = myGradient;
    drawingContext.strokeStyle = 'rgba(0, 0, 0, 0)';

    // Draw the circle.
    circle(50, 50, 40);

  describe('A fiery sun drawn on a light blue background.');
}

