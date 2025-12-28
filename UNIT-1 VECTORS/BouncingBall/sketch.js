let position;
let velocity;

function setup(){
    createCanvas(700,350);
    position=createVector(100,100);
    velocity=createVector(2,2.5);
    //stroke(0);
    //strokeWeight(2);

}

function draw(){
    background(255);
    position.add(velocity);

    if(position.x>width||position.x<0){
        velocity.x=velocity.x*-1;
    }

    if(position.y>height||position.y<0){
        velocity.y=velocity.y*-1;
    }
    stroke(5);
    fill(127,123,12)
    rect(0,0,width,height);


    stroke(0);
    strokeWeight(2);
    fill(127);

    circle(position.x,position.y,25);

}