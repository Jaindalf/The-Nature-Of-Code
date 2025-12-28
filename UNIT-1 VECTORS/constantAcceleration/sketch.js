class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();

    this.topSpeed = 10;
  }

  move() {
    let mouse=createVector(mouseX,mouseY);
    let dir=p5.Vector.sub(mouse,this.position);
    dir.setMag(0.2);
    this.acceleration=dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }


  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 50);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}
let mover
function setup() {
  createCanvas(640, 240);
  background(255);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.show();
  mover.move();
  mover.checkEdges();


}