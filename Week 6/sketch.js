let hunger = 10
let energy = 100
let happyiness = 50
let health = 100




function setup() {
  createCanvas(800, 800);
  let Food = createButton("food")
  let Sleep = createButton("bed")
  let Activities = createButton("games")
  let Health = createButton("medicine")
  Food.position(400, 600);
  Sleep.position(1000, 400);
  Activities.position(550, 300);
  Health.position(950, 700);

}

function draw() {
  background(150);
}
