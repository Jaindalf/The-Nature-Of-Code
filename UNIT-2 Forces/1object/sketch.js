function setup() {

    createCanvas(640, 240);
    background(255);
    m = new Mover();
    n = new Mover();
    createP("Click mouse to apply wind force.");
}

function easy(p, gravity) {
    let g=p5.Vector.mult(gravity,p.mass);
    p.applyForce(g);
    p.fieldForce();
    if (mouseIsPressed) {
        p.windForce();
    }
    p.update();
    p.show();
    p.checkEdges();

}

function draw() {
    background(255);
    let gravity = createVector(0, 0.1);

    easy(m, gravity);
  //  easy(n, gravity);


}
