function setup() {
  createCanvas(1000, 800);
  
}

function draw() {
  background(150); 
  //stap 1
let X = 100
text(X,20,20)
//stap 2
let Greeting = "hello world"
text(Greeting,20,60)
//stap 3 en 4
let A = 20
  let B = 10
  let Optellen = A + B
  let Aftrekken = A - B
  let Keer = A * B
  let Delen = A / B
  let y=80
  text ("optellen "+ Optellen  ,20,y)
  noLoop(y=y+30)
  text("aftrekken " + Aftrekken,20,y)
  noLoop(y=y+30)
  text("vermenigvuldigen " + Keer,20 ,y)
  noLoop(y=y+30)
  text ("delen door " + Delen)


}
