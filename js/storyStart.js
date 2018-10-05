var canvas;

function setup(){
     canvas = createCanvas(windowWidth, windowHeight);
     canvas.style('display','block');
}

function draw(){
     background(255);
     textAlign(CENTER,CENTER);
     textSize(60);
     text('There Once Was A Princess And Her Dragon', width/8, 0, (3*width)/4, height);
}

/* A functon to make the canvas responsive to the screen */
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
