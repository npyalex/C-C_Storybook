var radius = 100; //radius of the circle
var screenState;
var mouseTopLeft = false;
var mouseTopRight = false;
var mouseBottomLeft = false;
var mouseBottomRight = false;
var mouseIsClickable = false;
var userClicked = false;

var canvas;
var img1, img2, img3, img4, img5, img5, img6, img7, img8, img9, img10, img11, img12;
var wrd1, wrd2, wrd3, wrd4;
var imgBank = []; // Array for the image prompts
var wrdBank = []; // Array for the word prompts
var arr = []; // A test array
var a, b, c, d, e, f, g, h; // Random index based on arr length
var storyImg; // The user's image choice
var storyCpt; // The user's caption choice

function preload() {
    img1 = loadImage('image-01.jpg');
    img2 = loadImage('image-02.jpg');
    img3 = loadImage('image-03.jpg');
    img4 = loadImage('image-04.jpg');
    img5 = loadImage('image-05.jpg');
    img6 = loadImage('image-06.jpg');
    img7 = loadImage('image-07.jpg');
    img8 = loadImage('image-08.jpg');
    img9 = loadImage('image-09.jpg');
    img10 = loadImage('image-10.jpg');
    img11 = loadImage('image-11.jpg');
    img12 = loadImage('image-12.jpg');
}

/* Canvas is the size of the window */
function setup() {
     canvas = createCanvas(windowWidth, windowHeight);
     canvas.style('display', 'block');
     ellipseMode(RADIUS);
     screenState = 0;

     /* Test array functionality
        - Use a loop */
     arr.push(img1);
     arr.push(img2);
     arr.push(img3);
     arr.push(img4);
     arr.push(img5);
     arr.push(img6);
     arr.push(img7);
     arr.push(img8);
     arr.push(img9);
     arr.push(img10);
     arr.push(img11);
     arr.push(img12);

     print('Array is this long ' + (arr.length).toString());

     // Generate a random index for the image to be displayed -- index will be between 0 and lenght - 1
     a = int(random(0, arr.length));
     b = int(random(0, arr.length));
     c = int(random(0, arr.length));
     d = int(random(0, arr.length));

     print('Random index a is ' + a.toString());
     print('Random index b is ' + b.toString());
     print('Random index c is ' + c.toString());
     print('Random index d is ' + d.toString());

     // Generate a random index for the captions
     e = int(random(0, arr.length));
     f = int(random(0, arr.length));
     g = int(random(0, arr.length));
     h = int(random(0, arr.length));
}

function draw() {
     var x = width / 2;
     var y = height / 2;
     /* no matter the window size (x,y) will refer to the centre point */
     var diameter = dist(mouseX,mouseY,x,y); //the distance of the pointer from the centre of the screen

     print('The current screen is',screenState);

     if (screenState == 0) { //opening screen. green circle on grey background. only the circle is clickable.
          background (200); //grey

          ellipse (x,y,100,100); //circle at x,y,width,height
          fill (0,255,0); //green
          if (diameter < radius) {
               mouseIsClickable = true;
          } else {
               mouseIsClickable = false;
          }
          if ((mouseIsClickable == true) && (userClicked == true)) {
               // print('the circle is being clicked');
               // print('current screen is',screenState);
               nextScreen();
          }
     }

     if (screenState == 1) { // second screen. Four rectangles holding images "choose one of four images"
          // Get a random image from the array
          var imgA = arr[a];
          var imgB = arr[b];
          var imgC = arr[c];
          var imgD = arr[d];

          // Track the mouse location
          trackMouse(x,y);

          // Draw the rectangle borders
          fill(255);
          rect (0,0,x,y); // top left
          rect (x,0,x,y); //top right
          rect (0,y,x,y); //bottom left
          rect (x,y,x,y); //bottom right

          // Display the image at the center of each quadrant of the screen.
          imageMode(CENTER);
          image(imgA, width/4, height/4, imgA.width/8, imgA.height/8);
          image(imgB, (3*width)/4, height/4, imgB.width/8, imgB.height/8);
          image(imgC, width/4, (3*height)/4, imgC.width/8, imgC.height/8);
          image(imgD, (3*width)/4, (3*height)/4, imgD.width/8, imgD.height/8);

          if ((mouseTopLeft == true) && (userClicked == true)) {
               //if the mouse is in the top left and clicked, store the variable that was loaded here
               // Save imgA
               storyImg = imgA;

               // nextScreen();
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

     if (screenState == 2) { //third screen. Four rectangles holding text. "Choose your text"
          // Track the mouse coordinates
          trackMouse();

          fill(200);
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

     if (screenState == 3) { //fourth screen. show the images & text you picked

          // Final display boundaries
          fill(200);
          rect (0,0,width,(height*0.75)); // top, 3/4 of the screen
          rect (0,(height*0.75),width,y); //bottom

          // Draw the final image & text
          imageMode(CENTER);
          image(storyImg, width/2, (3*height)/8, storyImg.width/8, storyImg.height/8);
     }
}

/* Track the user's mouse clicks */
function mouseClicked(){
     if ((userClicked == false) && (mouseIsClickable)) {
          userClicked = true;
     }
}

/* A functon to make the canvas responsive to the screen */
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

/* A function to advance the screenState and create the next screen */
function nextScreen(){
     userClicked = false;
     screenState++;
}

/* A function to track the x, y position of the mouse */
function trackMouse(x,y) {
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
}
