class Walker{
    constructor(){
        this.x=width/2; //Initialize Walker at the centre of the screen
        this.y=height/2;  
      }


    show(){
        stroke(0);
        point(this.x,this.y);
        
    }


    step(){

        const xstep=floor(random(0,1.3)); //Makes xstep biased towards values b/w 0 and 1 .
        const ystep=floor(random(2,3.3));
        

        switch (xstep){
            case 0:
                this.x++;
                break;

            case 1:
                this.x--;
                break;
        
            default:
                break;
        }

        switch(ystep){
        
            case 2:
                this.y++;
                break;

            case 3:
                this.y--;
                break;

            default:
                break;



        }


    }

}

let walker;
function setup(){
    createCanvas(640,640);
    background(255);
    
    walker=new Walker();



}

function draw(){
    walker.step();
    walker.show();
}