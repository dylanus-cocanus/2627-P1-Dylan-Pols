let shapes = [[/* xpos*/ 10,/* ypos*/10,/* width*/30,/* height*/30,/* color1*/ 150, /* color2*/ 150, /* color3*/ 150]]
let pauze = false

function setup() {
  createCanvas(1000, 1000);
  regenerate()
}
//kiest waar de vormpjes komen
function regenerate() {
  shapes = []
  for (let i = 0; i < random(700, 4500); i++) {
    let xPos = random(100, 900)
    let yPos = random(100, 900)
    let width = random(10, 60)
    let height = random(10, 60)
    let color1 = random(0, 255)
    let color2 = random(0, 255)
    let color3 = random(0, 255)
    shapes.push([xPos, yPos, width, height, color1, color2, color3])
  }
}
function keyPressed() {
  if(keyCode == 32) {
    pauze = !pauze
  }
}
function draw() {
  background(100);
  //zorgt er voor dat je de vormpjes ook echt ziet
  for (let i = 0; i < shapes.length; i++) {
    fill(shapes[i][4], shapes[i][5], shapes[i][6])
    rect(shapes[i][0] - 100, shapes[i][1], shapes[i][2], shapes[i][3])
    ellipse(shapes[i][0] + 100, shapes[i][1], shapes[i][2], shapes[i][3])

    if(pauze == false){
      shapes[i][2] = shapes[i][2] + random(-5, 5)
      shapes[i][3] = shapes[i][3] + random(-5, 5)

      shapes[i][0] = shapes[i][0] + random(-5, 5)
      shapes[i][1] = shapes[i][1] + random(-5, 5)
    }
  }
}
