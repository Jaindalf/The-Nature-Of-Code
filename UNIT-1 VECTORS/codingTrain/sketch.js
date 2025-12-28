class codingTrain {
  constructor(image,trainW){
    this.image=image;
    this.position=createVector(width/2-trainW/2,height/2-trainW-1);
    this.velocity=createVector(1,0);
    this.acceleration=createVector(0,0);
    this.W=trainW

  }


  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(25);

    if(this.position.x>width){
      this.position.x=0
    }
  }


  show(){
    image(this.image,this.position.x,this.position.y,this.W,this.W);
  }

  keyPressed(){
    if(keyCode===UP_ARROW){
      this.acceleration.x+=1;
    }

     if(keyCode===DOWN_ARROW){
      this.acceleration.x-=0.1;
    }
  }

}


function preload(){
  trainImage=loadImage("train.jpg");
}

let train;
let trainW=64;

function setup(){
  createCanvas(640,240);
  train=new codingTrain(trainImage,trainW);

}
function keyPressed() {
  train.keyPressed();
}
function draw(){
  train.show();
  train.update();
}