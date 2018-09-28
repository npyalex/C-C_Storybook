var canvas;
var img1, img2, img3, img4, img5, img5, img6, img7, img8, img9, img10, img11, img12;
var wrd1, wrd2, wrd3, wrd4;
var imgBank = []; // Array for the image prompts
var wrdBank = []; // Array for the word prompts
var arr = []; // A test array
var a, b, c, d; // Random index based on arr length

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
}

function draw() {
    background(50);
    // Get a random image from the array
    var imgA = arr[a];
    var imgB = arr[b];
    var imgC = arr[c];
    var imgD = arr[d];

    
    // Display the image at (0,0) at half its size
    image(imgA, 0, 0, imgA.width/4, imgA.height/4);
    image(imgB, imgA.width/4, 0, imgB.width/4, imgB.height/4);
    image(imgC, 0, imgB.height/4, imgC.width/4, imgC.height/4);
    image(imgD, imgC.width/4, imgC.height/4, imgD.width/4, imgD.height/4);
}

/* Make the canvas responsive -- automatically resize the window */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
