var radius = 100; //radius of the circle
var screenState;
var mouseTopLeft = false;
var mouseTopRight = false;
var mouseBottomLeft = false;
var mouseBottomRight = false;
var mouseIsClickable = false;
var userClicked = false;

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
/* no matter the window size (x,y) will refer to the centre point */
    var d = dist(mouseX,mouseY,x,y); //the distance of the pointer from the centre of the screen

//print('the current screen is',screenState);

if (screenState == 0) { //opening screen
    background (200); //grey

    ellipse (x,y,100,100); //circle at x,y,width,height
    fill (0,255,0); //green
    if (d < radius) {
        mouseIsClickable = true;
    } else {
        mouseIsClickable = false;
    }
    if ((mouseIsClickable == true) && (userClicked == true)) {
 //       print('the circle is being clicked');
//        print('current screen is',screenState);
        nextScreen();
        }
}
if (screenState == 1) {
    if ((mouseX<x)&&(mouseY<y)) {
        mouseTopLeft = true;
        mouseIsClickable = true;
        print('the mouse is in the top left');
    }
    if ((mouseX>x)&&(mouseY<y)) {
        mouseTopRight = true;
        mouseIsClickable = true;
        print('the mouse is in the top right');
    }
    if ((mouseX<x)&&(mouseY>y)) {
        mouseBottomLeft = true;
        mouseIsClickable = true;
        print('the mouse is in the bottom left');
    }
    if ((mouseX>x)&&(mouseY>y)) {
        mouseBottomRight = true;
        mouseIsClickable = true;
        print('the mouse is in the bottom right');
    }
   fill(255);
   rect (0,0,x,y); // top left
   rect (x,0,x,y); //top right
   rect (0,y,x,y); //bottom left
   rect (x,y,x,y); //bottom right
    if ((mouseTopLeft == true) && (userClicked == true)) { //if the mouse is in the top left and clicked, store the variable that was loaded here     
        nextScreen();
            }
    if ((mouseTopRight == true) && (userClicked == true)) {
        nextScreen();
        // store the choice
            }
    if ((mouseBottomLeft == true) && (userClicked == true)) {
        nextScreen();
        // store the choice
            }
    if ((mouseBottomRight == true) && (userClicked == true)) {
        nextScreen();
        // store the choice
            }
    }
}
function mouseClicked()
{
    if ((userClicked == false) && (mouseIsClickable)) {
    userClicked = true;
            }
}
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

function nextScreen()
{
    userClicked = false;    
    screenState++;
    background(200);
}