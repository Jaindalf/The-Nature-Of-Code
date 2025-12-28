

class Walker{
    constructor(){
        this.position=createVector(width/2,height/2);
        this.velocity=createVector(2,2);

        this.xoff=0;
        this.yoff=10000;

    }

    show(){
        stroke(0);
        point(this.position.x,this.position.y);

    }

    move(){
        this.velocity.x=map(noise(this.xoff),0,1,0,10);
        this.velocity.y=map(noise(this.yoff),0,1,0,10);
        this.xoff+=0.001;
        this.yoff+=0.01;
        

        
        this.position.add(this.velocity);

        if(this.position.x>width||this.position.x<0){
            this.position.x=noise(this.xoff);

        }


         if(this.position.y>height||this.position.y<0){
            this.position.y=noise(this.yoff);

        }
    }
}
let walker;
function setup(){
    createCanvas(640,240);
    background(255);
    walker=new Walker();
}

function draw(){
    walker.show();
    walker.move();
}