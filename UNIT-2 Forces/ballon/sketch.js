class Ballon {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

        this.upForce = createVector(0, -0.02);
        this.gForce = createVector(0, 0.01);
        this.windForce = createVector();
        this.topSpeed = 5;
        this.radius = height / 10;
        this.triangleSize = 5;

        this.noiseX=1000;
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {

        this.windForce.x = map(noise(this.noiseX), 0, 1, -0.01, 0.01);

        //this.windForce.y = map(noise(10000), 0, 1, -0.01, 0.01);


        this.applyForce(this.windForce);
        this.applyForce(this.upForce);
        this.applyForce(this.gForce);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);

        this.acceleration.mult(0);

        this.checkCollision();
        this.noiseX+=0.01;
    }

    checkCollision() {
        const ceilingY = 0;

        if (this.position.y - this.radius <= ceilingY) {
            this.position.y = ceilingY + this.radius;

            this.velocity.y *= -0.6; // bounce coefficient (0.6 = partially elastic)
        }
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127, 180, 255);
        circle(this.position.x, this.position.y, this.radius * 2);


        const balloonBottom = this.position.y + this.radius;


        triangle(
            this.position.x,
            balloonBottom,
            this.position.x + this.triangleSize,
            balloonBottom + this.triangleSize,
            this.position.x - this.triangleSize,
            balloonBottom + this.triangleSize
        );

        const stringStart = balloonBottom + this.triangleSize;


        line(
            this.position.x,
            balloonBottom + this.triangleSize,
            this.position.x,
            balloonBottom + this.triangleSize * 20
        );
    }
}

let ballon;

function setup() {
    createCanvas(640, 240);
    ballon = new Ballon();
}

function draw() {
    background(255);

    fill(220);
    rect(0, 0, width, 0);

    ballon.update();
    ballon.show();
}
