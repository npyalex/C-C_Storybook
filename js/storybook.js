var radius = 100; //radius of the circle
var screenState;
var mouseTopLeft = false;
var mouseTopRight = false;
var mouseBottomLeft = false;
var mouseBottomRight = false;
var mouseIsClickable = false;
var userClicked = false;

var canvas;
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15;
var cpt1, cpt2, cpt3, cpt4, cpt5, cpt6, cpt7, cpt8, cpt9, cpt10, cpt11, cpt12;
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
    img13 = loadImage('image-13.jpg');
    img14 = loadImage('image-14.jpg');
    img15 = loadImage('image-15.jpg');
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
     arr.push(img13);
     arr.push(img14);
     arr.push(img15);
    
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

     /* Array of functions */
     wrdBank.push("They tried to make friends.");
     wrdBank.push("It didn't go well.");
     wrdBank.push("It went great!");
     wrdBank.push("The princess got angry.");
     wrdBank.push("The dragon got angry.");
     wrdBank.push("The princess thought it was funny.");
     wrdBank.push("The dragon thought it was funny.");
     wrdBank.push("They didn't like one another.");
     wrdBank.push("The dragon felt sad.");
     wrdBank.push("They played together.");
     wrdBank.push("They sang together.");
     wrdBank.push("They argued together.");

     print('Word Bank is this long ' + (wrdBank.length).toString());

     // Generate a random index for the captions
     e = int(random(0, wrdBank.length));
     f = int(random(0, wrdBank.length));
     g = int(random(0, wrdBank.length));
     h = int(random(0, wrdBank.length));

     print('Random index e is ' + e.toString());
     print('Random index f is ' + f.toString());
     print('Random index g is ' + g.toString());
     print('Random index h is ' + h.toString());
}

function draw() {
     var x = width / 2;
     var y = height / 2;
     /* no matter the window size (x,y) will refer to the centre point */
     var diameter = dist(mouseX,mouseY,x,y); //the distance of the pointer from the centre of the screen

     // print('The current screen is',screenState);

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
          drawBorders(x,y);

          // Display the image at the center of each quadrant of the screen.
          imageMode(CENTER);
          image(imgA, width/4, height/4, imgA.width, imgA.height/8);
          image(imgB, (3*width)/4, height/4, imgB.width/8, imgB.height/8);
          image(imgC, width/4, (3*height)/4, imgC.width/8, imgC.height/8);
          image(imgD, (3*width)/4, (3*height)/4, imgD.width/8, imgD.height/8);

          if ((mouseTopLeft == true) && (userClicked == true)) {
               // If the mouse is in the top left and clicked, store the variable that was loaded here - save imgA
               storyImg = imgA;
               nextScreen();
          }
          if ((mouseTopRight == true) && (userClicked == true)) {
               storyImg = imgB;
               nextScreen();
          }
          if ((mouseBottomLeft == true) && (userClicked == true)) {
               storyImg = imgC;
               nextScreen();
          }
          if ((mouseBottomRight == true) && (userClicked == true)) {
               storyImg = imgD;
               nextScreen();
          }
     }

     if (screenState == 2) { //third screen. Four rectangles holding text. "Choose your text"
          // Get a random image from the array
          var cptA = wrdBank[e];
          var cptB = wrdBank[f];
          var cptC = wrdBank[g];
          var cptD = wrdBank[h];

          // Track the mouse coordinates
          trackMouse();

          // Draw the rectangle borders
          drawBorders(x,y);

          // Display the text at the center of each quadrant of the screen.
          textAlign(CENTER);
          fill(0);
          text(cptA, width/4, height/4);
          text(cptB, (3*width)/4, height/4);
          text(cptC, width/4, (3*height)/4);
          text(cptD, (3*width)/4, (3*height)/4);

          if ((mouseTopLeft == true) && (userClicked == true)) {
               // If the mouse is in the top left and clicked, store the variable that was loaded here -- Save the caption
               storyCpt = cptA;
               nextScreen();
          }
          if ((mouseTopRight == true) && (userClicked == true)) {
               storyCpt = cptB;
               nextScreen();
               // store the choice
          }
          if ((mouseBottomLeft == true) && (userClicked == true)) {
               storyCpt = cptC;
               nextScreen();
               // store the choice
          }
          if ((mouseBottomRight == true) && (userClicked == true)) {
               storyCpt = cptD;
               nextScreen();
               // store the choice
          }
     }

     if (screenState == 3) { //fourth screen. show the images & text you picked
          // Final display boundaries
          strokeWeight(0);
          fill(200);
          rect (0,0,width,(height*0.75)); // top, 3/4 of the screen
          rect (0,(height*0.75),width,y); //bottom

          // Draw the final image & text
          imageMode(CENTER);
          image(storyImg, width/2, (3*height)/8, storyImg.width/8, storyImg.height/8);

          fill(0);
          textAlign(CENTER);
          text(storyCpt, width/2, (7*height)/8);

          // If user clicks screen advance to next screen
          print(userClicked);

     }
}

/* Track the user's mouse clicks */
function mouseClicked(){ // RN this is tracking whether the user has clicked ever - ought to track an actual click
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

/* A function to draw the quadrant's borders */
function drawBorders(x,y) {
     fill(255);
     rect (0,0,x,y); // top left
     rect (x,0,x,y); //top right
     rect (0,y,x,y); //bottom left
     rect (x,y,x,y); //bottom right
}
