
let Normal = 1;
let start = null;
function setup() {

    createCanvas(640, 240);
    background(255);
    p = new Mover(100, 150, 2.5);
    se = new Mover(130, 130, 5);
    createP("Click mouse to apply wind force.");
}

function easy(p, gravity) {
    let g = p5.Vector.mult(gravity, p.mass);
    p.applyForce(g);
    //  p.fieldForce();
    if (mouseIsPressed) {
        p.mouseForce();
    }

    if (p.contactEdge()) {
        p.frictionForce(1);
    }
    p.update();
    p.show();
    p.checkEdges();

}

function mousePressed(){
    start=createVector(mouseX,mouseY);

}

function mouseReleased(){
    end=createVector(mouseX,mouseY);
    toss=p5.Vector.sub(end,start);
    toss.mult(0.05);

    p.velocity.add(toss);
}

function draw() {
    background(255);
    let gravity = createVector(0, 0.1);

    let g = p5.Vector.mult(gravity, p.mass);
    p.applyForce(g);
    //  p.fieldForce();
    if (mouseIsPressed) {
        p.mouseForce();
    }

    if (p.contactEdge()) {
        p.frictionForce(1);
    }
    p.update();
    p.show();
    p.checkEdges();


   // easy(m, gravity);
    //   easy(se, gravity);


}
