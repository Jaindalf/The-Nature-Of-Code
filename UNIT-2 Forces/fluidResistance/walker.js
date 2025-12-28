class Walker {
    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.mass = m;
        this.radius = m * 4;
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.topspeed=2*m;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        //fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
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

    checkEdges() {
        if (this.position.y > height - this.radius) {
            this.velocity.y *= -0.9; // A little dampening when hitting the bottom
            this.position.y = height - this.radius;
        }
    }
}