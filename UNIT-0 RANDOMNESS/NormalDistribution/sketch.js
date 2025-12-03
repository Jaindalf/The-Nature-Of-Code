function setup(){
    createCanvas(640,640);
    background(255);
}


function draw(){
    // Normal distribution

    let x=randomGaussian(320,60);
    noStroke();
    fill(0, 100);
    circle(x, 320, 16);
}