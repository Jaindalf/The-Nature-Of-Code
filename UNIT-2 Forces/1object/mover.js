class Mover {
    constructor() {
        this.mass = 1;
        this.position = createVector(random(width / 2), random(height / 2));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.topspeed = 10
        this.radius = 48;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }

    windForce() {
        let wind = createVector(mouseX - this.position.x, mouseY - this.position.y);
        wind.normalize();
        wind.mult(0.2);
        this.applyForce(wind);
    }


    fieldForce() {
        let rightD = width - (this.position.x + this.radius);
        let leftD = this.position.x - this.radius;

        let topD = this.position.y - this.radius;
        let bottomD = height - (this.position.y + this.radius);


        let rightField = createVector(-10 / rightD, 0);
        let leftField = createVector(10 / leftD, 0);

        let topField = createVector(0, 10 / topD);
        let bottomField = createVector(0, -10 / bottomD);

        this.applyForce(rightField);
        this.applyForce(leftField);

        this.applyForce(topField);
        this.applyForce(bottomField);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0)

    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127, 127);
        circle(this.position.x, this.position.y, 48);
    }

    checkEdges() {
        if (this.position.x+this.radius > width) {
            this.position.x = width-this.radius;
            this.velocity.x *= -1;

        }
        else if (this.position.x-this.radius < 0) {
            this.position.x = 0+this.radius;
            this.velocity.x *= -1;

        }


        if (this.position.y+this.radius > height) {
            this.position.y = height-this.radius;
            this.velocity.y *= -1;

        }
        else if (this.position.y-this.radius < 0) {
            this.position.y = 0+this.radius;
            this.velocity.y *= -1;

        }
    }
}
