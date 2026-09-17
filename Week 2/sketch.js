function setup() {
  createCanvas(4000, 1500);
}

function draw() {
  background(200);

  background(120,150,200);
  fill("yellow")
  circle(150, 100, 150  )
  fill("white")
  circle(3900, 100, 120)
  strokeWeight(0)
  fill(75)
  triangle(-220, 1000,460,10, 1500, 1000)
  triangle(1500,1250,2680,250,3420,1230)
  fill(50)
  triangle(1075,1120,1730,360,2300,1200)
  triangle(2880,1200,3600,120,4500,1300)
  fill(250)
  triangle(345,173,460,10,640,180)
  triangle(3450,344,3600,120,3785,360)
  triangle(2570,340,2680,250,2750,340)
    fill(75)
  rect(0,1000,4000,300)
  fill("green")
  rect(0,1300,4000,200)
  rect(0,900,4000,100)
  fill("white")
  rect(0,1130,200,50)
  rect(300,1130,300,50)
  rect(700,1130,300,50)
  rect(1100,1130,300,50)
  rect(1500,1130,300,50)
  rect(1900,1130,300,50)
  rect(2300,1130,300,50)
  rect(2700,1130,300,50)
  rect(3100,1130,300,50)
  rect(3500,1130,300,50)
  rect(3900,1130,300,50)
  fill(101,67,33)
  rect(350,950,100,-300)
  rect(830,950,100,-300)
  fill("green")
  circle(400,615,350)
  circle(875,570,350)


    fill(1)
    textAlign(CENTER);
  textSize(50);

  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 2000, 50);
}
