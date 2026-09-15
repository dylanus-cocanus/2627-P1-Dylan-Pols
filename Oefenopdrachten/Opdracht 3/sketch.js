function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(120);
  let score = 60


  if (score > 90 && score <= 100){
    text("uitstekent!", 20,20)
  }

  else if (score > 70 && score <=89){
     text("goed gedaan", 20,30)
  }
  else if (score > 50 && score<=69){
    text("voldoende", 20,40)
}

  else (score < 49)
    text("onvoldoende",20,50)
}
