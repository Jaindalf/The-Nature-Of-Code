
class Mover {
    constructor(x, y, m) {
        this.mass = m;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.radius=m*16;
        this.topspeed=m*4;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127, 127);
        circle(this.position.x, this.position.y, this.radius);
    }

    windForce(){
        let wind=createVector(mouseX-this.position.x,mouseY-this.position.y);
        wind.normalize();
        wind.mult(0.2)
        this.applyForce(wind);
    }

    checkEdges() {
        if (this.position.x+this.radius >= width) {
            this.position.x = width-this.radius;
            this.velocity.x *= -1;
        } else if (this.position.x-this.radius <= 0) {
            this.velocity.x *= -1;
            this.position.x = 0+this.radius;
        }
        if (this.position.y+this.radius >= height) {
            this.velocity.y *= -1;
            this.position.y = height-this.radius;
        }

        else if (this.position.y-this.radius <= 0) {
            this.velocity.y *= -1;
            this.position.y = 0+this.radius;
        }
    }
}

let moverA;
let moverB;

function setup() {
    createCanvas(640, 240);
    moverA = new Mover(50, 32, 3);
    moverB = new Mover(100, 150, 3);
}

function draw() {
   background(255);

  
    let gravity = createVector(0, 0.1);
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);

    if (mouseIsPressed) {
        
        moverA.windForce();
        moverB.windForce();
    }

    moverA.update();
    moverA.show();
    moverA.checkEdges();

    moverB.update();
    moverB.show();
    moverB.checkEdges();


}
