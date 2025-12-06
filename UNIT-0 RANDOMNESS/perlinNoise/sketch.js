class Walker{

    constructor(){
        this.tx=0;
        this.ty=10000;

    }


    step(){
        this.x=map(noise(this.tx),0,1,0,width);
        this.y=map(noise(this.ty),0,1,0,height);

        // Move the walker forward
        this.tx=this.tx+0.01;
        this.ty=this.ty+0.01;
    }

    show(){
        strokeWeight(2);
        fill(127);
        stroke(0);
        circle(this.x,this.y,50);
    }

}

let wal;
function setup(){
    createCanvas(640,640);
    
    background(255);
    wal=new Walker ();
    
}


function draw(){
    wal.step();
    wal.show();
}



