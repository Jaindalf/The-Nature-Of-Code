class Walker {
    constructor() {
        this.x = width / 2; //Initialize Walker at the centre of the screen
        this.y = height / 2;
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

        while (true) {
            let r1 = random(10);
            let p = r1*r1;
            let r2 = random(10);
            if (r2 < p) {
                xstepSize = r1;
                ystepSize = r1;
                break;

            }
        }





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