let walkers = [];
let liquid;

function setup() {
    createCanvas(640, 240);

    reset();
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);


}



function draw() {
    background(255);
    liquid.show();


    for (let i = 0; i < 9; i++) {
        if(liquid.contains(walkers[i])){
            let dragForce=liquid.calculateDrag(walkers[i]);
            walkers[i].applyForce(dragForce);
        }

        let gravity=createVector(0,0.1*walkers[i].mass);

        walkers[i].applyForce(gravity);
        walkers[i].update();
        walkers[i].checkEdges();
        walkers[i].show();
    }
}
function mousePressed() {
    reset();
}

function reset() {
    for (let i = 0; i < 9; i++) {
        walkers[i] = new Walker(40 + i * 70, 0, random(0.5, 3));
    }
}