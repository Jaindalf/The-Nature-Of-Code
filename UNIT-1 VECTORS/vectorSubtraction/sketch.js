function Setup() {
  createCanvas(1080, 1880);

}

function draw() {
  background(255);
  strokeWeight(4);
  stroke(200);
  let center = createVector(width / 2, height / 2);

  let mouse = createVector(mouseX, mouseY);

  line(0, 0, center.x, center.y);
  line(0, 0, mouse.x, mouse.y);

  mouse.sub(center);

  stroke(0);
  translate(width / 2, height / 2);

  line(0, 0, mouse.x, mouse.y);

  mouse.mult(3);
  line(0, 0, mouse.x, mouse.y);



 
}