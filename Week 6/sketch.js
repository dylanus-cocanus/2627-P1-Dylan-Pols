let hunger = 50
let energy = 100
let happiness = 90
let healthPoints = 100
let frames = 0
let sleeping = false
let pressBed = 0

function preload() {
 Background = loadImage("assets/essentials/photos/Huiskamer.jpg")
 Bedroom = loadImage("assets/essentials/photos/sleeping.png")
 deadBoris = loadImage("assets/essentials/photos/dead-boris.png")
}


function setup() {

  createCanvas(1000, 800);
  food = createImg(
    "assets/essentials/photos/Baconsoup.png"
  )
  food.position(720, 200);
food.mousePressed(() => {
   hunger += 5})
 hunger = getItem("hunger")

  sleep = createButton("bed")
  sleep.position(850, 700);
  sleep.mousePressed(() => {
    sleeping = !sleeping
    })

  sleep.hide()
  energy = getItem("energy")

  slaapkamer = createButton("Slaapkamer")
  slaapkamer.position(400,550)
  slaapkamer.mousePressed(Bed)


  activities = createButton("games")
  activities.position(100, 300);


  health = createButton("medicine")
  health.position(650, 700);
  health.mousePressed(() => {
   healthPoints += 5})
 healthPoints = getItem("healthPoints")

 console.log(deadBoris.width, deadBoris.height)
}

function draw() {
  frames += 1;
  if(frames == 10) { //alles wat in deze if loop zit is elke seconde
    frames = 0; // reset van frames
    hunger -= 1 
    energy -= 3
  
    
    if(hunger >= 130) {
    energy += 0.01
  }
    if(hunger <= 30) {
    energy -= 0.05
    }
 if(hunger <= 0) {
  healthPoints -= 10
}

    storeItem("healthPoints",healthPoints)
    storeItem("energy",energy)
    storeItem("hunger",hunger)
  }

  if(energy >= 145) {energy = 145}
  if(hunger > 145) {hunger = 145}
  if(healthPoints >= 145) {healthPoints = 145}
  if(energy <= 0) {energy = 0}
  if(hunger <= 0) {hunger = 0}
  if(healthPoints <= 0) {healthPoints = 0}
  if(sleeping == true) {energy += 0.1}

  

  //console.log(frames)
  if (pressBed == 0){
  image(Background,0,0,1000,800)
  } 
  if (pressBed == 1){
  image(Bedroom,0,0,1000,800)
 }
  //   if(healthPoints == 0) {
    
  //}

  fill("black")
  rect(50,14,150,20,10)
  fill(204,153,51)
  rect(52,16,healthPoints,16,10)
  fill(0)
  textSize(15)
  text("Health",60,29)

  fill("black")
  rect(50,37,150,20,10)
  fill(204,153,51)
  rect(52,39,hunger,16,10)
  fill(0)
  text("Hunger",60,52)

  fill("black")
  rect(50,60,150,20,10)
  fill(204,153,51)
  rect(52,62,energy,16,10)
  fill(0)
  text("Energy",60,75)

  fill("black")
  rect(50,83,150,20,10)
  fill(204,153,51)
  rect(52,85,happiness,16,10)
  fill(0)
  text("Happiness",60,98)
image(deadBoris, 0, 0, 300, 600)
 
}


function Bed(){
  pressBed += 1
  if (pressBed >=2){
    pressBed = 0
  }
  if (pressBed == 1){
    sleep.show()
    food.hide()
    health.hide()
    activities.hide()
  }
  if (pressBed == 0){
    sleep.hide()
    food.show()
    health.show()
    activities.show()
  
  }
}