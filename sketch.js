// initialize all image variables
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;

//initialize the random image array
var randImage = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

//preload all images
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

//runs on setup; creates the canvas
function setup () {
    createCanvas(innerWidth,innerHeight); //canvas is equal to the screen size
    print("We've got a canvas, at least");
}

//draws one random image from the array
function draw() {
 //   background(204);
    image(img12,0,0);
    print("It's working, it's working!");
}