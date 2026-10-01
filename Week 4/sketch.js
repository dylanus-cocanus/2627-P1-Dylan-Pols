// geef figuurtjes andere kleuren
// voeg circels toe
let blocks = [[/* xpos*/ 10,/* ypos*/10,/* width*/30,/* height*/30,/* color1*/ 150, /* color2*/ 150, /* color3*/ 150]]


function setup() {
  createCanvas(1000, 1000);
  regenerate()
}

function regenerate() {
  blocks = []
  for(let i = 0; i < random(400,1000); i++) {
    let xPos = random(100,900)
    let yPos = random(100,900)
    let width =  random(10,60)
    let height = random(10,60)
    let color1 = random(0,255)
    let color2 = random(0,255)
    let color3 = random(0,255)
   blocks.push([xPos,yPos,width,height,color1,color2,color3])
  }
} 

function keyPressed() {


}




function draw() {
  background(100);

  
  // console.log(blocks[0][0], blocks[0][1])


  for(let i = 0; i < blocks.length; i++) {
    fill(blocks[i][4],blocks[i][5],blocks[i][6])
    rect(blocks[i][0],blocks[i][1], blocks[i][2],blocks[i][3])
    ellipse(blocks[i][0],blocks[i][1], blocks[i][2],blocks[i][3])
    blocks[i][0] = blocks[i][0] + random(-1,1)
    blocks[i][1] = blocks[i][1] + random(-1,1)
    blocks[i][2] = blocks[i][2] + random(-3,3)
    blocks[i][3] = blocks[i][3] + random(-3,3)

  }
}
