let screen = 0;
let RSTbutton = 0;

function setup() {
  createCanvas(1800, 2400);


button = createButton('START!');
  button.position(600,1100);
  button.size(600,400);
  button.style('font-size', '150px');
  button.style('border-radius', '60px');
  button.style('border-color', 'red');
  button.style('color', 'red');
  button.style("font-family", "sans-serif");
  button.mousePressed(function(){
    screen = 1;
    button.remove();
    RST();
    type();
    puzzle();
  });
  
  
  
}

function draw(){
    background(220);
    stroke("RED");
    text("", 500, 100);

  if(screen == 0){
  
  stroke("Red");
  strokeWeight(20);
  loadFont('Calibri,Aerial, sans-serif');
  textSize(400);
  text("Exercises", 0,300);
  textSize(100);
  text(" ", 750, 1450); 

}else if(screen == 1){

    button.remove();
     textSize(350);
    text("Exercises!", 100, 300);

}else if(screen == 2){
  button.remove();
  removeButtons();
}
}

  
function RST(){
  RSTbutton = createButton('Reaction Speed Test');
    RSTbutton.position(50,400);
    RSTbutton.size(1700, 600);
    RSTbutton.style('font-size', '150px');
    RSTbutton.style('border-radius', '60px');
    RSTbutton.style('color', 'red');
    RSTbutton.style('font-family', 'sans-serif');
  RSTbutton.mousePressed(function(){
    screen = 2;
    removeButtons();
  });

    
}
function type(){
  typebutton = createButton('Typing Keyboard Test');
    typebutton.position(50,1050);
    typebutton.size(1700, 600);
    typebutton.style('font-size', '150px');
    typebutton.style('border-radius', '60px');
    typebutton.style('color', 'red');
    typebutton.style('font-family', 'sans-serif');
    typebutton.mousePressed(function(){
      screen = 3;
      removeButtons();
    })

}
function puzzle(){
  puzzlebutton = createButton('Puzzle Test');
    puzzlebutton.position(50,1700);
    puzzlebutton.size(1700, 600);
    puzzlebutton.style('font-size', '150px');
    puzzlebutton.style('border-radius', '60px');
    puzzlebutton.style('color', 'red');
    puzzlebutton.style('font-family', 'sans-serif');
    puzzlebutton.mousePressed(function(){
      screen = 4;
      removeButtons();
    })
}

function removeButtons(){
  RSTbutton.remove();
  puzzlebutton.remove();
  typebutton.remove();
}



