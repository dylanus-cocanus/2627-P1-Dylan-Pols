let vakje1 = "white"
let vakje2 = "white"
let vakje3 = "white"
let vakje4 = "white"
let vakje5 = "white"
let vakje6 = "white"
let vakje7 = "white"
let vakje8 = "white"
let vakje9 = "white"

let celgrote = 100
let celbuffer = 50
let celstart = 200

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20);
  let vakjex = celstart;
  let vakjey = celstart;
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje1)
  rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje2)
   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje3)
   rect(vakjex,vakjey,celgrote,celgrote)
  vakjex = celstart
  vakjey += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje4)
    rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje5)
   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje6)
   rect(vakjex,vakjey,celgrote,celgrote)
     vakjex = celstart
  vakjey += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje7)
    rect(vakjex,vakjey,celgrote,celgrote)
  vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje8)
   rect(vakjex,vakjey,celgrote,celgrote)
    vakjex += celgrote + celbuffer
  if(mouseX >= vakjex && mouseX <= vakjex + celgrote && mouseY >= vakjey && mouseY <= vakjey + celgrote) {
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(vakje9)
   rect(vakjex,vakjey,celgrote,celgrote)
}
