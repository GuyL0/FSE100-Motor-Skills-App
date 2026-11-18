let words = [["d","i","r","t"],["t","a","n","k"],["c","o","n","e"],["b","u","l","k"]];
let accuracy = [0,0,0,0];
let accurateLetters = 0;
let canvasWidth = 400;
let canvasHeight = 650;
let offset = 60;
let lft_align = 115;
let currentLetter = 0;
let currentWord = 0;
let score = 0;
let time = 0;
let img;
let typeSFX;
let wrongSFX;
let mode = 2;

function textSet(scale=100,color='black',align=LEFT,font='Courier New'){
  textSize(scale);
  fill(color);
  textAlign(align,BASELINE);
  textFont(font);
}

async function setup() {
  background(900);
  createCanvas(canvasWidth, canvasHeight);
  img = await loadImage('letter_board'+currentWord+'.png');
  typeSFX = await loadSound('typewriter.wav');
  wrongSFX = await loadSound('Typewriter2.wav');
  vid = createVideo('LOGO.mp4');
  vid.loop();
  image(vid, 0, 0, 100, 100);
  //Restart Button
  if (mode == 1){
    button = createButton('RESTART');
    button.position(125, 520);
    button.size(150, 50);
    button.style("font-family", "New Courier");
    button.style("font-size", "18px");
    button.mousePressed(() => {
      reset();
    });
  }
  if (mode == 2){
    button = createButton('START');
    button.position(125, 520);
    button.size(150, 50);
    button.style("font-family", "New Courier");
    button.style("font-size", "20px");
    button.mousePressed(() => {
      reset();
    });
  }
}
function reset(){
  mode = 0;
  currentWord = 0;
  score = 0;
  time = 0;
  accurateLetters = 0;
  button.remove();
  clear();
  setup();
}

function draw(){
  background(900);
  switch (mode) {
    case 0:
      screen1(); break;
    case 1:
      screen2(); break;
    case 2:
      screen3(); break;
  } 
}

function screen1(){
  var desc = textDescent();
  //Displays acuuracy colors of letters
  textSet(100,'gray',CENTER,'Courier New');
  for (let i = 0; i < words[currentWord].length; i ++) {
      if (accuracy[i] === 1) fill("green");
      if (accuracy[i] === 2) fill("red");
      if (accuracy[i] === 0) fill("gray");
      text(words[currentWord][i],lft_align+(offset*i),200);
  }
  //Underline letters
  stroke('black');
  strokeWeight(4);
  line((lft_align-30)+(offset*currentLetter), 185 + desc, (lft_align+30)+(offset*currentLetter), 185 + desc);
  //Score and Time text
  noStroke();
  textSet(25,'gray');
  text("Score:"+score,15,45);
  textSet(100,'gray',CENTER);
  image(img, 50, 250);
  noStroke()
  fill(900);
  rect(285, 20, 300, 55);
  textSet(25,'gray',LEFT);
  text("Time:"+time,270,45); 
  if (frameCount % 60 == 0 ) time ++;
  //Displays words on screen
  textSet(100,'black',CENTER);
  for (let i = 0; i < words[currentWord].length; i ++) {
    if (i === currentLetter) text(words[currentWord][i],lft_align+(offset*i),200);
  }
}

function screen2(){
  var accuracy = round((accurateLetters/16)*100);
  textSet(50,'black',CENTER);
  text("RESULTS",200,150);
  fill(900);
  strokeWeight(2);
  rect(canvasWidth/6, 190, canvasWidth-canvasWidth/3, 300);
  textSet(40,'gray',CENTER);
  text("TIME",200,240);
  textSet(40,'black',CENTER);
  text(time,200,280);
  textSet(40,'gray',CENTER);
  text("SCORE",200,320);
  textSet(40,'black',CENTER);
  text(score,200,360);
  textSet(40,'gray',CENTER);
  text("ACCURACY",200,410);
  textSet(40,'black',CENTER);
  text(accuracy+'%',200,460);
}

function screen3(){
  textSet(28,'black',CENTER);
  textWeight(700);
  text("TYPING KEYBOARD TEST",200,150);
  textWeight(400);
  textSet(28,'gray',CENTER);
  text("INSTRUCTIONS",200,225);
  fill(900);
  strokeWeight(2);
  rect(canvasWidth/6, 250, canvasWidth-canvasWidth/3, 220)
  textSet(25,'black',CENTER);
  textWrap(WORD);
  text("Using the keyboard, type each letter correctly of the word displayed on the screen.",80,265,240);
  
}
 
function keyPressed() {
  if(mode === 0){
    stroke(200);
    typeSFX.play();
    if (key === words[currentWord][currentLetter]) {
      accurateLetters ++;
      fill("green");
      accuracy[currentLetter] = 1
      text(words[currentWord][currentLetter],lft_align+(offset*currentLetter),200);
      score += 10;
    } else{
      wrongSFX.play();
      fill("red");
      accuracy[currentLetter] = 2
      text(words[currentWord][currentLetter],lft_align+(offset*currentLetter),200);
      score -= 7;
    }
      fill("black");
      if (currentLetter < words[currentWord].length-1){
        currentLetter++;
      } else{
        if (currentWord === words.length-1){
          mode = 1;
        } else currentWord++;
        currentLetter = 0;
        accuracy = [0,0,0,0];
      }
    clear();
    setup();
  }
}
