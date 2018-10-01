var canvas;
var img1, img2, img3, img4, img5, img5, img6, img7, img8, img9, img10, img11, img12;
var wrd1, wrd2, wrd3, wrd4;
var imgBank = []; // Array for the image prompts
var wrdBank = []; // Array for the word prompts
var arr = []; // A test array
var a, b, c, d; // Random index based on arr length
var storyImg; // The user's image choice
var storyCpt; // The user's caption choice
var q1Clicked, q2Clicked, q3Clicked, q4Clicked = false; // Boolean to register user's clicks
var stryStage; // A counter to check what level user is at - Go screen (0), Images (1) Captions (2)

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

/* Automatically fill the window */
function setup() {
     canvas = createCanvas(windowWidth, windowHeight);
     canvas.style('display', 'block');
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

     // Generate a random index for the image to be displayed -- look out for 12 index
     i = int(random(0, arr.length));


     // Story just beginning - set story stage to 0
     stryStage = 0;
}

function draw() {
    // Get a random image from the array
    var imgA = arr[a];
    var imgB = arr[b];
    var imgC = arr[c];
    var imgD = arr[d];


    // Display the image at the center of each quadrant of the screen.
    imageMode(CENTER);
    image(imgA, width/4, height/4, imgA.width/8, imgA.height/8);
    image(imgB, (3*width)/4, height/4, imgB.width/8, imgB.height/8);
    image(imgC, width/4, (3*height)/4, imgC.width/8, imgC.height/8);
    image(imgD, (3*width)/4, (3*height)/4, imgD.width/8, imgD.height/8);

    // Save the images
    if(q1Clicked && (stryStage == 0)){
        background(0);
        imageMode(CENTER);
        image(imgA, width/2, height/2, imgA.width/8, imgA.height/8);
        var storyImg = imgA;
        // Save imgA
    } else if(q2Clicked && (stryStage == 0)){
        // Save imgB
    } else if(q3Clicked && (stryStage == 0)){
        // Save imgC
    } else if(q4Clicked && (stryStage == 0)){
        // Save imgD
    }

    // Save the captions
    if(q1Clicked && (stryStage == 1)){
        // Save the cptA
    } else if(q2Clicked && (stryStage == 1)){
        // Save the cptB
    } else if(q3Clicked && (stryStage == 1)){
        // Save the cptC
    } else if(q4Clicked && (stryStage == 1)){
        // Save the cptD
    }

}

/* An event listener to track which quadrant the user has clicked and set the final image & caption picked by user */
function mousePressed() {
        // Get the coordinates where the mouse was clicked
        var x = mouseX;
        var y = mouseY;
        print('Mouse was pressed at (' + mouseX.toString() + ' ,' + mouseY.toString() + ')');
        // Check which part of the screen we are in
        if((x < width/2) && (y < height/2)){
            // First Quadrant Top Left - change q1Clicked
            q1Clicked = true;
            // Set other quadrants to false
            q2Clicked = false;
            q3Clicked = false;
            g4Clicked = false;
        } else if((x > width/2) && (y < height/2)){
            // Second Quadrant Top Right - change q2Clicked
            q2Clicked = true;
            q2Clicked = false;
            q3Clicked = false;
            g4Clicked = false;

        } else if((x < width/2) && (y > height/2)){
            // Third Quadrant Bottom Left - change q3Clicked
            q3Clicked = true;
            q2Clicked = false;
            q3Clicked = false;
            g4Clicked = false;

        } else {
            // Fourth Quadrant Bottom Right - change q4Clicked
            q4Clicked = true;
            q2Clicked = false;
            q3Clicked = false;
            g4Clicked = false;
        }
}

/* Make the canvas responsive -- automatically resize the window */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
