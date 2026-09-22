let Player = 1
let RectX1 = 100
let RectX2 = 255
let RectX3 = 410
let RectY1 = 100
let RectY2 = 255
let RectY3 = 410
let RectW = 150
let RectH = 150
let Box1 = "white"
let Box2 = "white"
let Box3 = "white"
let Box4 = "white"
let Box5 = "white"
let Box6 = "white"
let Box7 = "white"
let Box8 = "white"
let Box9 = "white"




function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);

//logic

if (
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH 
){
  Box1 = "grey"
}else
  Box1 = "white"

if (
  mouseX > RectX2 && mouseX < RectX2 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH
){
  Box2 = "grey"
}else{
  Box2 = "white"
}
if (
  mouseX > RectX3 && mouseX < RectX3 + RectW &&
  mouseY > RectY1 && mouseY < RectY1 + RectH
){
  Box3 = "grey"
}else{
  Box3 = "white"
}
if (
  mouseX > RectX1 && mouseX < RectX1 + RectW &&
  mouseY > RectY2 && mouseY < RectY2 + RectH
){
  Box4 = "grey"
}else{
  Box4 = "white"
}



  strokeWeight(0)
  fill(Box1)
  rect (RectX1,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box2)
  rect (RectX2,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box3)
  rect (RectX3,RectY1, RectW,RectH)

  strokeWeight(0)
  fill(Box4)
  rect (RectX1,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box5)
  rect (RectX2,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box6)
  rect (RectX3,RectY2, RectW,RectH)

  strokeWeight(0)
  fill(Box7)
  rect (RectX1,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box8)
  rect (RectX2,RectY3, RectW,RectH)

  strokeWeight(0)
  fill(Box9)
  rect (RectX3,RectY3, RectW,RectH)

}