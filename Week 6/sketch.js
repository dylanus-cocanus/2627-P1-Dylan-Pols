let hunger = 100
let energy = 100
let happyiness = 50
let health = 100




function setup() {
  createCanvas(1000, 800);
  let Food = createButton("food")
  let Sleep = createButton("bed")
  let Activities = createButton("games")
  let Health = createButton("medicine")
  Food.position(100, 600);
  Sleep.position(700, 400);
  Activities.position(250, 300);
  Health.position(650, 700);

}

function draw() {
  background(150);
  fill("red")
  rect(50,35,150,15,10)
  fill("orange")
  rect(55,37,hunger,11,10)
  fill(0)
  textSize(15)
  text("Hunger",60,47)
}
