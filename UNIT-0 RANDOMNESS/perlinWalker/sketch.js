class Walker {
    constructor() {
        this.x = width / 2; //Initialize Walker at the centre of the screen
        this.y = height / 2;

        this.xoff=0;
        this.yoff=10000;
    }


    show() {
        stroke(0);
        point(this.x, this.y);

    }

    step() {

        const xstep = floor(random(0, 2)); //Makes xstep biased towards values b/w 0 and 1 .
        const ystep = floor(random(2, 4));

        // const stepSize=randomGaussian(0,3);
        let xstepSize;
        let ystepSize;

        xstepSize=map(noise(this.xoff),0,1,-2,2);
        ystepSize=map(noise(this.yoff),0,1,-2,2);

        this.xoff=this.xoff+0.1;
        this.yoff=this.yoff+0.1;





        switch (xstep) {
            case 0:
                this.x = this.x + xstepSize;
                break;

            case 1:
                this.x = this.x - xstepSize;
                break;

            default:
                break;
        }

        switch (ystep) {

            case 2:
                this.y = this.y + ystepSize;
                break;

            case 3:
                this.y = this.y - ystepSize;
                break;

            default:
                break;



        }


    }

}

let walker;
function setup() {
    createCanvas(640, 640);
    background(255);

    walker = new Walker();



}

function draw() {
    walker.step();
    walker.show();
}