



function setup() {
    createCanvas(640, 640);
    background(255);




}




function draw() {

    let r = random(255);
    let g = random(255);
    let b = random(255);

    //let xpos = 320;
   // let ypos = 320;


    let xpos = random(width);
    let ypos = random(height);

    let d=ypos*random(1)+60;
    let e=xpos*random(1)+60;
    stroke(10);
    fill(0, 255, 0);

    let t=randomGaussian(320,60);
    circle(d, ypos,10);


   // let d = randomGaussian(xpos, 10);

   // noStroke();
    //stroke(10);
    //fill(0, 255, 0);
    //circle(d, ypos, 10);












    // noStroke();
    // fill(0, 100);
    // circle(x, 320, 16);
}