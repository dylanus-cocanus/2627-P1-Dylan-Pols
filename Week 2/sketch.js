let posistieAuto = 100
let positieWolk = 250
let positieWereld = -2000
function setup() {
  createCanvas(1000, 1500);
}

function draw() {
  background(200);

  fill(120,150,200)
  rect(positieWereld + 0,0,4000,1500)
  fill("yellow")
  circle(positieWereld + 150, 100, 150  )
  fill("white")
  circle(positieWereld + 3900, 100, 120)
  strokeWeight(0)
  fill(75)
  triangle(positieWereld + -220,1000,positieWereld + 460,10,positieWereld + 1500, 1000)
  triangle(positieWereld + 1500,1250,positieWereld + 2680,250,positieWereld + 3420,1230)
  fill(50)
  triangle(positieWereld + 1075,1120,positieWereld + 1730,360,positieWereld + 2300,1200)
  triangle(positieWereld + 2880,1200,positieWereld + 3600,120,positieWereld + 4500,1300)
  fill(250)
  triangle(positieWereld+ 345,173,positieWereld + 460,10,positieWereld + 640,180)
  triangle(positieWereld + 3450,344,positieWereld + 3600,120,positieWereld + 3785,360)
  triangle(positieWereld + 2570,340,positieWereld + 2680,250,positieWereld + 2750,340)
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

  fill("green")
  circle(positieWereld + 400,615,350)
  circle(positieWereld + 875,570,350)

  // triangle(1650,1150,2050,1060,2050,1250)
  // fill("red")
  // rect(1350,1100,400,100)
  // rect(1350,1050,300,50)
  // fill("white")
  // rect(1650,1050,100,50)
  // fill("black")
  // circle(1685,1200,100)
  // circle(1405,1200,100)
  // fill("white")
  // circle(1685,1200,50)
  // circle(1405,1200,50)


   fill("yellow")
  triangle(posistieAuto + 300,1150,posistieAuto + 700,1060,posistieAuto + 700,1250)
  fill("red")
  rect(posistieAuto,1100,400,100)
  rect(posistieAuto,1050,300,50)
  fill("white")
  rect(posistieAuto + 300,1050,100,50)
  fill("black")
  circle(posistieAuto + 335,1200,100)
  circle(posistieAuto + 55,1200,100)
  fill("white")
  circle(posistieAuto + 335,1200,50)
  circle(posistieAuto + 55,1200,50)
  posistieAuto = posistieAuto + 15
  if(posistieAuto >= 4300){
    posistieAuto = -400
  }

  text(posistieAuto,900,50)

  circle(positieWolk,250,200)
  circle(positieWolk + 165,260,200)
  circle(positieWolk + 250,250,200)
  circle(positieWolk + 180,160,200)
  circle(positieWolk + 85,215,200)  
  positieWolk = positieWolk - 5
  if(positieWolk <= -400){
    positieWolk = 4200
  }

  positieWereld = positieWereld + 3
 if(mouseX >= 2500)
  positieWereld = positieWereld - 3
 else(mouseX <= 1500)
  text(positieWolk,900,100)


    fill(1)
    textAlign(CENTER);
  textSize(50);

  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 2000, 50);
}
