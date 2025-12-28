class Mover {
    constructor(x, y, m) {
        this.mass = m;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.topspeed = m + 10
        this.radius = m * 16;
        this.mu = m * 3
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }

    mouseForce() {
        let wind = createVector(mouseX - this.position.x, mouseY - this.position.y);
        wind.normalize();
        wind.mult(0.2);
        this.applyForce(wind);
    }

    toss(){
        function mousePressed(){
            let start=createVector(mouseX,mouseY);

        }

        function mouseReleased(){
            let end=createVector(mouseX,mouseY);
            let toss=p5.Vector.sub(end,start);
            toss.mult(0.1);
        }
    }

    frictionForce(N) {
        let friction = this.velocity.copy();
        friction.normalize();
        friction.mult(-1);
        //we have the dirn of friction now, find its mag.

        //f=mu*N(for this case N=1)
        friction.mult(this.mu * N)

        this.applyForce(friction);
    }


    fieldForce() {
        let rightD = width - (this.position.x + this.radius);
        let leftD = this.position.x - this.radius;

        let topD = this.position.y - this.radius;
        let bottomD = height - (this.position.y + this.radius);


        let rightField = createVector(-1 / rightD, 0);
        let leftField = createVector(1 / leftD, 0);

        let topField = createVector(0, 1 / topD);
        let bottomField = createVector(0, -1 / bottomD);

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
        circle(this.position.x, this.position.y, 2 * this.radius);
    }

    checkEdges() {

        let bounce = -0.75;
        if (this.position.x + this.radius > width) {
            this.position.x = width - this.radius;
            this.velocity.x *= bounce;

        }
        else if (this.position.x - this.radius < 0) {
            this.position.x = 0 + this.radius;
            this.velocity.x *= bounce;

        }


        if (this.position.y + this.radius > height) {
            this.position.y = height - this.radius;
            this.velocity.y *= bounce;

        }
        else if (this.position.y - this.radius < 0) {
            this.position.y = 0 + this.radius;
            this.velocity.y *= bounce;

        }
    }


    contactEdge() {
        return (this.position.y > height - this.radius );
    }
}

