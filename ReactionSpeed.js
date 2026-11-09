let correctSound;
let incorrectSound;

async function setup() {
  createCanvas(400, 650);
  x = 0;
  y = random(120, 390);
  game = 101;
  loss = 102;
  win = 103;
  current = 104;
  ms = 0;
  best = 0;
  totalms = 0;
  gamesWon = 0;
  correctSound = await loadSound('ding-sound-effect_1.mp3');
  incorrectSound = await loadSound('answer-wrong.mp3');
}

function draw() {
  background(40, 168, 252);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  strokeWeight(5);
  if(current < 102){
  x = x + 1;
  }
  textSize(40);
  text("Click the Button", 200, 90);
  text("Once it Turns Green!", 200, 140);
  fill("red");
  if (x >= y){
    fill(12, 232, 15);
  }
  circle(200, 400, 300);
 
  if(current == 102){
    background(69, 77, 196);
    textSize(45);
    text("You clicked too", 200, 200);
    text("soon! Try again?", 200, 250);
    x = 0;
    textSize(20);
    fill(70, 80, 110);
    square(295, 545, 100);
    square(5, 545, 100);
    fill("white");
    text("Restart", 55, 585);
    text("Home", 345, 585);
    x = 0;
    y = random(120, 390);
  }
  
  if(current == 103){
    background(69, 77, 196);
    textSize(42);
    fill(12, 232, 15);
    if(round(ms) < best || best == 0){
      best = round(ms);
    }

    if(ms < 235){
    fill('blue');
    triangle(24, 50, 80, 100, 35, 170);
    triangle(25, 50, 107, 50, 95, 167);
    fill(14, 215, 237);
    circle(65, 75, 100);
    text("LIGHTSPEED!", 258, 82.5);

    }
    if(ms < 300 && ms > 235){
    fill('blue');
    triangle(59, 50, 115, 100, 70, 170);
    triangle(60, 50, 142, 50, 130, 167);
    fill('gold');
    circle(100, 75, 100);
    text("Lightning", 275, 50);
    text("Fast!", 275, 95);
    }
    if(ms > 300 && ms < 350){
    fill('blue');
    triangle(59, 50, 115, 100, 70, 170);
    triangle(60, 50, 142, 50, 130, 167);
    fill('silver');
    circle(100, 75, 100);
    text("Super", 275, 50);
    text("Quick!", 275, 95);
    }
    if(ms > 350 && ms < 450){
    fill('blue');
    triangle(59, 50, 115, 100, 70, 170);
    triangle(60, 50, 142, 50, 130, 167);
    fill(168, 50, 42);
    circle(100, 75, 100);
    text("Not", 275, 50);
    text("Bad!", 275, 95);
    }
    
    fill(12, 232, 15);
    text("Good job! You", 200, 200);
  
    text("clicked in " + round(ms) + " ms!", 200, 250);
    textSize(25);
    if(round(ms) == best){
      text("New Best!", 200, 320);
    }
    if(round(ms) > best){
    text("Your current best: " + best + "ms", 200, 320);
    }
    if(gamesWon > 1){
    text("Your average time: " + round(totalms/gamesWon) + "ms", 200, 360);
    }
  
    textSize(42);
    fill(70, 80, 110);
    square(295, 545, 100);
    square(5, 545, 100);
    fill("white");
    textSize(20);
    text("Restart", 55, 585);
    text("Home", 345, 585);
    x = 0;
    y = random(120, 390);
    
  }

  if(current == 104){
    background(200);
  }
}



function mousePressed(){
  //Menus
  if((mouseX > 295 && mouseX < 400 && mouseY < 645 && mouseY > 545) && current > 101){
    current = 104;
    return;
  }
  if((mouseX > 0 && mouseX < 105 && mouseY < 645 && mouseY > 545) && current > 101){
    current = 101;
  }
  //Reaction Game
 if((mouseX > 50 && mouseX < 350 && mouseY < 550 && mouseY > 250) && x <= y && current == 101){
   current = 102;
   incorrectSound.play();
  }
  if((mouseX > 50 && mouseX < 350 && mouseY < 550 && mouseY > 250) && x >= y && current == 101){
    gamesWon = gamesWon + 1;
    correctSound.play();
    current = 103;
    ms = ((x - y) / 60) * 1000;
    totalms = totalms + ms;
  }
if(current == 104){
  current = 101;
}
    }