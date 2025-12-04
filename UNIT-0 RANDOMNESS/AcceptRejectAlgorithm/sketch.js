

let randomCounts = [];
let total = 5;


function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < total; i++) {
    
    randomCounts[i] = 0;
  }
}


function acceptreject() {
  // Do this “forever” until you find a qualifying random value.
  while (true) {
    // Pick a random value.
    let r1 = random(1);
    // Assign a probability.
    let probability = r1;
    // Pick a second random value.
    let r2 = random(1);
    // Does it qualify?  If so, you’re done!
    if (r2 < probability) {
      return r1;
    }
  }
}

function draw() {
  background(255);
  let index = int(acceptreject() * randomCounts.length);
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(2);
  fill(127);
  const w = width / randomCounts.length;
  
  for(let i=0;i<randomCounts.length;i++){
    text(i,i*w,height)
  }

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w , randomCounts[x]);
    text(randomCounts[x],x*w,height)
  }
  
  
  for(let i=0;i<randomCounts.length;i++){
    text(i,i*w,0+10)
  }

}