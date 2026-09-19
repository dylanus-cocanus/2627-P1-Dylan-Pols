let posistieAuto1 = -500
let posistieAuto2 = -200
let positieWolk = 250
let positieWereld = 0
let postitieBerg = 0
function setup() {
  createCanvas(2000, 1500);
}

function draw() {
  background(200);
if(positieWereld >= -1500 && positieWereld <=1200){
  fill("orange")
}
if(positieWereld >= -1201 && positieWereld <=6000){
  fill(120,150,200)
}
if(positieWereld >=6001 && positieWereld <= 8000){
  fill('black')
}
  rect(positieWereld + 0,0,4000,1500)
 

  let myGradient = drawingContext.createRadialGradient(50, 50, 3, 50, 50, 40);
  myGradient.addColorStop(0, 'yellow');
  myGradient.addColorStop(0.6, 'orangered');
  myGradient.addColorStop(1, 'yellow');
  drawingContext.fillStyle = myGradient;
  drawingContext.strokeStyle = 'rgba(0, 0, 0, 0)';

  // Draw the circle.
  circle(positieWereld +150, 100, 150);
  fill("white")
  circle(positieWereld + 3900, 100, 120)
  strokeWeight(1)
  fill(75)
  triangle(postitieBerg + -220,1000,postitieBerg + 460,10,postitieBerg + 1500, 1000)
  triangle(postitieBerg + 1500,1250,postitieBerg + 2680,250,postitieBerg + 3420,1230)
  fill(50)
  triangle(positieWereld + 1075,1120,positieWereld + 1730,360,positieWereld + 2300,1200)
  triangle(positieWereld + 2880,1200,positieWereld + 3600,120,positieWereld + 4500,1300)
  fill(250)
  triangle(postitieBerg + 345,173,postitieBerg + 460,10,postitieBerg + 640,180)
  triangle(positieWereld + 3450,344,positieWereld + 3600,120,positieWereld + 3785,360)
  triangle(postitieBerg + 2570,340,postitieBerg + 2680,250,postitieBerg + 2750,340)
    fill(75)
  rect(positieWereld + 0,1000,4000,300)
  fill("green")
  rect(positieWereld + 0,1300,4000,200)
  rect(positieWereld + 0,900,4000,100)
  fill("white")
  rect(positieWereld + 0,1130,200,50)
  rect(positieWereld + 300,1130,300,50)
  rect(positieWereld + 700,1130,300,50)
  rect(positieWereld + 1100,1130,300,50)
  rect(positieWereld + 1500,1130,300,50)
  rect(positieWereld + 1900,1130,300,50)
  rect(positieWereld + 2300,1130,300,50)
  rect(positieWereld + 2700,1130,300,50)
  rect(positieWereld + 3100,1130,300,50)
  rect(positieWereld + 3500,1130,300,50)
  rect(positieWereld + 3900,1130,300,50)
  fill(101,67,33)
  rect(positieWereld + 350,950,100,-300)
  rect(positieWereld + 830,950,100,-300)

fill(70)
rect(positieWereld + 3080,945,50,-400)
rect(positieWereld + 3025,680,150,-400)
fill("red")
circle(positieWereld + 3100,365,100)
fill("yellow")
circle(positieWereld + 3100,490,100)
  fill("green")
  circle(positieWereld + 3100,615,100)
  circle(positieWereld + 400,615,350)
  circle(positieWereld + 875,570,350)

  fill("yellow")
  triangle(posistieAuto2 + 1650,1150,posistieAuto2 + 2050,1060,posistieAuto2 + 2050,1250)
  fill("blue")
  rect(posistieAuto2 + 1350,1100,400,100)
  rect(posistieAuto2 + 1350,1050,300,50)
  fill("white")
  rect(posistieAuto2 + 1650,1050,100,50)
  fill("black")
  circle(posistieAuto2 + 1685,1200,100)
  circle(posistieAuto2 + 1405,1200,100)
  fill("white")
  circle(posistieAuto2 + 1685,1200,50)
  circle(posistieAuto2 + 1405,1200,50)


   fill("yellow")
  triangle(posistieAuto1 + 300,1150,posistieAuto1 + 700,1060,posistieAuto1 + 700,1250)
  fill("red")
  rect(posistieAuto1,1100,400,100)
  rect(posistieAuto1,1050,300,50)
  fill("white")
  rect(posistieAuto1 + 300,1050,100,50)
  fill("black")
  circle(posistieAuto1 + 335,1200,100)
  circle(posistieAuto1 + 55,1200,100)
  fill("white")
  circle(posistieAuto1 + 335,1200,50)
  circle(posistieAuto1 + 55,1200,50)
  posistieAuto1 = posistieAuto1 + 20
  if(posistieAuto1 >= 4300){
    posistieAuto1 = -600
  }
  posistieAuto2 = posistieAuto2 + 21
  if(posistieAuto2 >= 4300){
    posistieAuto2 = -2000
  }

fill(101,67,33)
  rect(positieWereld + 800,1415,100,-300)
  fill("green")
  circle(positieWereld + 850,1000,350)

fill("white")
  text(posistieAuto1,900,50)

  circle(positieWereld + positieWolk,250,200)
  circle(positieWereld + positieWolk + 165,260,200)
  circle(positieWereld + positieWolk + 250,250,200)
  circle(positieWereld + positieWolk + 180,160,200)
  circle(positieWereld + positieWolk + 85,215,200)  
  positieWolk = positieWolk - 5
  if(positieWolk <= -400){
    positieWolk = 4200
  }

 if(mouseX >= 1500){
  positieWereld = positieWereld - 5
 }
 else if(mouseX <= 300){
  positieWereld = positieWereld + 5
  }
if(mouseX >= 1500){
  postitieBerg = postitieBerg - 4,5
 }
 else if(mouseX <= 300){
  postitieBerg = postitieBerg + 4,5
 }

  text(positieWereld,900,100)


    fill(1)
    textAlign(CENTER);
  textSize(50);

  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 600, 50);
}
