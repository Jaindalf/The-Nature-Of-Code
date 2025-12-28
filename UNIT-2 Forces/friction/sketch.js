
let Normal=1;
function setup() {

    createCanvas(640, 240);
    background(255);
    m = new Mover(100, 150, 2.5);
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

    if(p.contactEdge()){
        p.frictionForce(1);
    }
    p.update();
    p.show();
    p.checkEdges();

}

function draw() {
    background(255);
    let gravity = createVector(0, 0.1);

    easy(m, gravity);
 //   easy(se, gravity);


}
