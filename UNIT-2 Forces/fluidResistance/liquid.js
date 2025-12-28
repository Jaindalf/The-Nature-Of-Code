class Liquid {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c //drag coefficient
    }

    show() {
        noStroke();
        fill(120);
        rect(this.x, this.y, this.w, this.h);
    }

    contains(box) {
        let pos = box.position;

        return (pos.x > this.x && pos.x < this.x + this.w && pos.y > this.y && pos.y < this.y + this.h)
    }


    calculateDrag(box){
        let speed=box.velocity.mag();
        let dragMag=speed*speed*this.c*box.dimension.x;
        let drag=box.velocity.copy();
        drag.mult(-1);
        drag.setMag(dragMag);

        return drag;
    }
}