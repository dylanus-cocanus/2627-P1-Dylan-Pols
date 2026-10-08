let questions = ["vraag1","vraag2","vraag3","vraag4","vraag5","vraag6","vraag7","vraag8","vraag9","vraag10"]
let answers = [["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"]]
let Qnumber = 0
let correct = [0,1,3,2,1,3,2,0,3,1]



function setup() {
  createCanvas(800, 600);
  ActualSetup();
}



function draw() {
  background(100);
  if( Qnumber < questions.length){
    text(questions[Qnumber],350,100)  
  }
}

function ActualSetup(){
  let button1 = createButton(answers[Qnumber][0])
  button1.position(550,350)
  let button2 = createButton(answers[Qnumber][1])
  button2.position(650,350)
  let button3 = createButton(answers[Qnumber][2])
  button3.position(750,350)
  let button4 = createButton(answers[Qnumber][3])
  button4.position(850,350)
  
  button1.mousePressed(answerA);
  button2.mousePressed(answerB);
  button3.mousePressed(answerC);
  button4.mousePressed(answerD);
}


function answerA() {
  if(correct[Qnumber] == 0)
  {
    console.log("Correct")
  }

  Qnumber = Qnumber + 1
}
function answerB() {
    if(correct[Qnumber] == 1)
  {
    console.log("Correct")
  }

  Qnumber = Qnumber + 1
}
function answerC() {
    if(correct[Qnumber] == 2)
  {
    console.log("Correct")
  }

   Qnumber = Qnumber + 1
}
function answerD() {
    if(correct[Qnumber] == 3)
  {
    console.log("Correct")
  }

   Qnumber = Qnumber + 1  
}

//10 vragen bedenken met antwoorden
// score display
