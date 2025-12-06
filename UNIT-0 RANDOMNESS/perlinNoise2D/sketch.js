
let zoff = 0.0
let rslider;
let gslider;
let bslider;
let rsliderTitle;
let gsliderTitle;
let bsliderTitle;

let rsliderValue;
let gsliderValue;
let bsliderValue;

function setup() {
    createCanvas(640, 240);
    background(255);

    rslider = createSlider(0, 255);
    rslider.position(0, 600);
    rslider.size(90);
    rsliderTitle = createP("Red")
    rsliderTitle.position(0, 595);

    gslider = createSlider(0, 255);
    gslider.position(100, 600);
    gslider.size(90);
    gsliderTitle = createP("Green")
    gsliderTitle.position(90, 595);

    bslider = createSlider(0, 255);
    bslider.position(200, 600);
    bslider.size(90);
    bsliderTitle = createP("Blue")
    bsliderTitle.position(180, 595);



    rsliderValue = createP(rslider.value());
    rsliderValue.position(50, 595);

    gsliderValue = createP(gslider.value());
    gsliderValue.position(150, 595);


    bsliderValue = createP(bslider.value());
    bsliderValue.position(250, 595);


}



function draw() {
    loadPixels();
    let xoff = 0.0;

    for (let x = 0; x < width; x++) {
        let yoff = 0.0;
        for (let y = 0; y < height; y++) {

            const r = map(noise(xoff, yoff, zoff), 0, 1, 0, rslider.value());
            const g = map(noise(xoff, yoff, zoff), 0, 1, 0, gslider.value());
            const b = map(noise(xoff, yoff, zoff), 0, 1, 0, bslider.value());



            const index = (x + width * y) * 4;

            pixels[index] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = 255;
            // set(x,y,floor(bright));
            yoff += 0.01;


        }

        xoff += 0.01;
    }
    updatePixels();
    zoff += 0.09;


    rsliderValue.html(rslider.value());
    gsliderValue.html(gslider.value());
    bsliderValue.html(bslider.value());

}