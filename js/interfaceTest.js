var radius = 100; //radius of the circle
var screenState;

/* Canvas is the size of the window */
function setup() {
     canvas = createCanvas(windowWidth, windowHeight);
     canvas.style('display', 'block');
     ellipseMode(RADIUS);
     screenState = 0;
}

function draw() {
    var x = width / 2;
    var y = height / 2;
/* no matter the window size x and y will refer to the centre point */
    var d = dist(mouseX,mouseY,x,y); //the distance of the pointer from the centre of the screen
 
if (screenState == 0) {
    background (200); //grey

    ellipse (x,y,100,100); //circle at x,y,width,height
    fill (0,255,0); //green
/* if mouse is in the circle and clicked, do something */   
    if ((d < radius) && (mouseIsPressed)) {
        print('the circle is being clicked');
        print('current screen is',screenState);
        screenState++;
        background(200);
        }
}
if (screenState==1){
    background(200);
    fill(255);
    rect (0,0,x,y); // top left
    rect (x,0,x,y); //top right
    rect (0,y,x,y);//bottom left
    rect (x,y,x,y)//bottom right
}
}
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}