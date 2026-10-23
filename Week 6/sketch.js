let hunger = 100
let energy = 100
let happyiness = 50
let health = 100




function setup() {
  createCanvas(1000, 800);
  let food = createButton("food")
  food.position(100, 600);
  food.mousePressed(() => {
    if(hunger > 142) {hunger >= 142}
  else hunger += 5})
  

  let sleep = createButton("bed")
  sleep.position(700, 400);


  let activities = createButton("games")
  activities.position(250, 300);


  let health = createButton("medicine")
  health.position(650, 700);



}

function draw() {
  background(150);
  fill("red")
  rect(50,35,150,20,10)
  fill("orange")
  rect(52,37,hunger,16,10)
  fill(0)
  textSize(15)
  text("Hunger",60,50)
}
