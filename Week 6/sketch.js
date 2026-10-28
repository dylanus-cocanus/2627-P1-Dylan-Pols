let hunger = 50
let energy = 100
let happiness = 90
let health = 145
let frames = 0
let sleeping = false



function setup() {
  createCanvas(1000, 800);
  let food = createButton("food")
  food.position(100, 600);
food.mousePressed(() => {
   hunger += 5})


  let sleep = createButton("bed")
  sleep.position(700, 400);
  sleep.mousePressed(() => {sleeping = true})
  sleep.mousePressed(() if(sleeping == true) 
  {sleeping = false})

  let activities = createButton("games")
  activities.position(250, 300);


  let health = createButton("medicine")
  health.position(650, 700);
}

function draw() {
  frames += 1;
  if(frames == 60) { //alles wat in deze if loop zit is elke seconde
    frames = 0; // reset van frames
    hunger -= 0.7
    energy -= 1
  }
    if(hunger >= 130) {
    energy += 0.9
  }
    if(hunger <= 30) {
    energy -= 0.2
  }
  if(energy >= 141) {energy = 141}
  if(hunger > 145) {hunger = 145}
    if(energy <= 0) {energy = 0}
  if(hunger <= 0) {hunger = 0}
  if(sleeping == true) {energy += 1}
  //console.log(frames)
  background(150);
  fill("red")
  rect(50,14,150,20,10)
  fill("pink")
  rect(52,16,health,16,10)
  fill(0)
  textSize(15)
  text("Health",60,29)

  fill("red")
  rect(50,37,150,20,10)
  fill("orange")
  rect(52,39,hunger,16,10)
  fill(0)
  text("Hunger",60,52)

  fill("blue")
  rect(50,60,150,20,10)
  fill("black")
  rect(52,62,energy,16,10)
  fill(255)
  text("Energy",60,75)

  fill("blue")
  rect(50,83,150,20,10)
  fill("darkgreen")
  rect(52,85,happiness,16,10)
  fill(0)
  text("Happiness",60,98)
}