let boxes = [];
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
        if(liquid.contains(boxes[i])){
            let dragForce=liquid.calculateDrag(boxes[i]);
            boxes[i].applyForce(dragForce);
        }

        let gravity=createVector(0,0.1*boxes[i].mass);

        boxes[i].applyForce(gravity);
        boxes[i].update();
        boxes[i].checkEdges();
        boxes[i].show();
    }
}
function mousePressed() {
    reset();
}

function reset() {
    for (let i = 0; i < 9; i++) {
        boxes[i] = new Box(5,10,40 + i * 70, 0, random(0.5, 3));
    }
}