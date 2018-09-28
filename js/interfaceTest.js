var radius = 100; //radius of the circle

/* Automatically fill the window */
function setup() {
     canvas = createCanvas(windowWidth, windowHeight);
     canvas.style('display', 'block');
     ellipseMode(RADIUS);
}

function draw() {
    var x = width / 2;
    var y = height / 2;
/* no matter the window size x and y will refer to the centre point */
    var d = dist(mouseX,mouseY,x,y); //the distance of the pointer from the centre of the screen
    
    background (200); //grey
    ellipse (x,y,100,100); //circle at x,y,width,height
    fill (0,255,0); //green
/* if mouse is in the circle and clicked, do something */   
    if ((d < radius) && (mouseIsPressed)) {
        print('the circle is being clicked');
        rect (0,0,innerWidth/2,innerHeight/2);
        rect (innerWidth,0,innerWidth/2, innerHeight/2);
        }
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}