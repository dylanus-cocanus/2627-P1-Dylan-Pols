let colors = ["red", "green", "blue", "orange", "purple", "yellow"];
let files = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let functions =  [RED, GREEN, BLUE, ORANGE, PURPLE, YELLOW]
let = currentC = "grey"



function setup() {
createCanvas(800, 400);
for(let i = 0; i < 6; i++) {
  let button = createButton(colors[i]);
  button.position(100 * i + 10, 350);
  button.style('background-color', colors[i]);
  button.style('font-size', '16px')
  button.mousePressed(functions[i]);
}
}

function RED() {
  currentC = "red"
}
function GREEN() {
  currentC = "green"
}
function BLUE() {
  currentC = "blue"
}
function ORANGE() {
  currentC = "orange"
}
function PURPLE() {
  currentC = "purple"
}
function YELLOW() {
  currentC = "yellow"
}
 



function draw() {
  background(currentC);
}
