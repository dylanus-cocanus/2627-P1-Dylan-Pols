let player = 1
let boxColour = "white"
let box1 = "white"
let box2 = "white"
let boxe3 = "white"
let box4 = "white"
let box5 = "white"
let box6 = "white"
let box7 = "white"
let box8 = "white"
let box9 = "white"
//let boxes = [0,0,0,0,0,0,0,0,0]

let pressed = 0
let boxPressed = 0
let boxSize = 100
let boxBuffer = 50
let boxLocation = 200



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20);
  textSize(40)
  fill(boxColour)
  text("speler" + player, 330, 100)
  let box_X = boxLocation;
  let box_Y = boxLocation;
  

    //   if (boxes[0] == 0) {
    //   fill("white")
    // }
    // else if(boxes[0] == 1) {
    //   fill("red")
    // }
    // else{
    //   fill("blue")
    // }
    
    if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
       boxPressed = 1
       if(pressed == 1 ){
         box1 = boxColour
         pressed = 0
       }
      strokeWeight(4)
    } else {
      strokeWeight(1)
    }
   fill(box1)
rect(box_X,box_Y,boxSize,boxSize)

  box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
       if(pressed == 1 ){
      box2 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box2)

   rect(box_X,box_Y,boxSize,boxSize)
    box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
    if(pressed == 1 ){
      boxe3 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(boxe3)

   rect(box_X,box_Y,boxSize,boxSize)
  box_X = boxLocation
  box_Y += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
        if(pressed == 1 ){
      box4 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box4)

    rect(box_X,box_Y,boxSize,boxSize)
  box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
       if(pressed == 1 ){
      box5 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box5)

   rect(box_X,box_Y,boxSize,boxSize)
    box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
       if(pressed == 1 ){
      box6 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box6)

   rect(box_X,box_Y,boxSize,boxSize)
     box_X = boxLocation
  box_Y += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
        if(pressed == 1 ){
      box7 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box7)

    rect(box_X,box_Y,boxSize,boxSize)
  box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
       if(pressed == 1 ){
      box8 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box8)

   rect(box_X,box_Y,boxSize,boxSize)
    box_X += boxSize + boxBuffer
  if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
     boxPressed = 1
        if(pressed == 1 ){
      box9 = boxColour
      pressed = 0
    }
    strokeWeight(4)
  } else {
    strokeWeight(1)
  }
  fill(box9)
   rect(box_X,box_Y,boxSize,boxSize)
}

function mousePressed() {
  // if(mouseX >= box_X && mouseX <= box_X + boxSize && mouseY >= box_Y && mouseY <= box_Y + boxSize) {
  //   boxes[0] +1
  // } 
  pressed = 1
  if(boxPressed >= 1){
  player += 1
  boxPressed = 0
 }
  if(player >= 3) {
    player = 1
  }
  if(player == 1) {
    boxColour = "red"
  }
  else{
    boxColour = "blue"
  }
}