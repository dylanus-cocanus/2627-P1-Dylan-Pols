let player = 1
let kleurvlakje = "white"
let vakje1 = "white"
let vakje2 = "white"
let vakje3 = "white"
let vakje4 = "white"
let vakje5 = "white"
let vakje6 = "white"
let vakje7 = "white"
let vakje8 = "white"
let vakje9 = "white"

let er_word_geklikt = 0
let gekliktvakje = 0
let celgrote = 100
let celbuffer = 50
let celstart = 200



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20);
  textSize(40)
  fill(kleurvlakje)
  text("speler" + player, 330, 100)
  let vakjex = celstart;
  let vakjey = celstart;
  
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    gekliktvakje = 1
    if(er_word_geklikt == 1 ){
      vakje1 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje1)

  rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
       if(er_word_geklikt == 1 ){
      vakje2 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje2)

   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
    if(er_word_geklikt == 1 ){
      vakje3 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje3)

   rect(vakjex,vakjey,celgrote,celgrote)
  vakjex = celstart
  vakjey += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
        if(er_word_geklikt == 1 ){
      vakje4 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje4)

    rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
       if(er_word_geklikt == 1 ){
      vakje5 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje5)

   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
       if(er_word_geklikt == 1 ){
      vakje6 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje6)

   rect(vakjex,vakjey,celgrote,celgrote)
     vakjex = celstart
  vakjey += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
        if(er_word_geklikt == 1 ){
      vakje7 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje7)

    rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje + 1
       if(er_word_geklikt == 1 ){
      vakje8 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje8)

   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
     gekliktvakje = 1
        if(er_word_geklikt == 1 ){
      vakje9 = kleurvlakje
      er_word_geklikt = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje9)
   rect(vakjex,vakjey,celgrote,celgrote)
}

function mousePressed() {
  er_word_geklikt = 1
  if(gekliktvakje >= 1){
  player += 1
  gekliktvakje = 0
 }
  if(player >= 3) {
    player = 1
  }
  if(player == 1) {
    kleurvlakje = "red"
  }
  else{
    kleurvlakje = "blue"
  }
}