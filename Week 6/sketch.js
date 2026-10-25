let hunger = 50
let energy = 100
let happyiness = 50
let health = 100




function setup() {
  createCanvas(1000, 800);
  let food = createButton("food")
  food.position(100, 600);
  food.mousePressed(() => {
    if(hunger > 140) {hunger >= 140}
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
  rect(50,14,150,20,10)
  fill("pink")
  rect(52,16,health,16,10)
  fill(0)
  textSize(15)
  text("Health",60,29)

  fill("orange")
  rect(50,37,150,20,10)
  fill("yellow")
  rect(52,39,hunger,16,10)
  fill(0)
  textSize(15)
  text("Hunger",60,52)

  fill("blue")
  rect(50,60,150,20,10)
  fill("black")
  rect(52,62,energy,16,10)
  fill(255)
  textSize(15)
  text("Energy",60,75)

  fill("darkgreen")
  rect(50,75,150,20,10)
  fill("green")
  rect(52,77,happiness,16,10)
  fill(0)
  textSize(15)
  text("Happiness",60,90)
}
