class __init__ {
    constructor() {
        this.trans = new Transformations();
    }
}

class rectangle {

    constructor(x, y, w, h) {

        this.points = [];

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.points.push(new Vector(3, [x + w, y + h, 1]));
        this.points.push(new Vector(3, [x, y + h, 1]));
        this.color = '#ffffff';

        this.middleX = (x + x + w + x + w + x) / 4;
        this.middleY = (y + y + y + h + y + h) / 4;

        this.trans = new Transformations();

    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(angle){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], -this.middleX, -this.middleY);
            this.points[i] = this.trans.rotate2D(this.points[i], angle);
            this.points[i] = this.trans.translate2D(this.points[i], this.middleX, this.middleY);
        }
    }

    draw(){
        
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);
        
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        endShape(CLOSE);

    }

}

class line {
    constructor(x1, y1, x2, y2) {
        this.points = []

        this.points.push(new Vector(3, [x1, y1, 1]));
        this.points.push(new Vector(3, [x2, y2, 1]));

        this.middleX = (x1 + x2) / 2;
        this.middleY = (y1 + y2) / 2;

        this.trans = new Transformations()
    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(angle){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], -this.middleX, -this.middleY);
            this.points[i] = this.trans.rotate2D(this.points[i], angle);
            this.points[i] = this.trans.translate2D(this.points[i], this.middleX, this.middleY);
        }
    }

    draw() {
        strokeWeight(3);
        beginShape(LINES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));

        endShape()
    }
}

class circle {
    constructor(x, y, r, t) {

        if(t < 3) {
            throw "O número de triângulos 't' deve ser maior ou igual a Três."
        }

        this.trans = new Transformations();


        this.points = []

        this.points.push(new Vector(3, [0,0,1]));
        this.points.push(new Vector(3, [0+r,0,1]));
        this.radius = r;
        this.triangles = t;

        this.center = [x, y]

        //let extra = this.source[0] * (Math.sqrt(2) - 1);
        //let eX = Math.sqrt(Math.pow(extra, 2)/2);

        //vertex(center[0], center[1]);

        for(let j = 0; j <t; j++){
            this.points.push(this.trans.rotate2D(this.points[j+1],2*Math.PI/t));
        }
        
        this.translate(x, y);

    }

    translate(dx, dy){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], dx, dy);
        }
    }

    rotate(angle){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], -this.center[0], -this.center[1])
            this.points[i] = this.trans.rotate2D(this.points[i], angle);
            this.points[i] = this.trans.translate2D(this.points[i], this.center[0], this.center[1])
            
        }
    }

    draw() {
        strokeWeight(0);

        beginShape(TRIANGLES);

        for(let i = 1; i <= this.triangles; i++) {

            vertex(this.points[i].get(1), this.points[i].get(2));
            vertex(this.center[0], this.center[1]);
            vertex(this.points[i+1].get(1), this.points[i+1].get(2));

        }

        endShape(CLOSE);

    }
}

class triangle {
    constructor(x1,y1,x2,y2,x3,y3) {
        this.points = []

        this.points.push(new Vector(3, [x1,y1,1]));
        this.points.push(new Vector(3, [x2,y2,1]));
        this.points.push(new Vector(3, [x3,y3,1]));

        this.trans = new Transformations()

        this.bX;
        this.bY;

        this.bRotX1 = x1;
        this.bRotX2 = x2;
        this.bRotX3 = x3;

        this.bRotY1 = y1;
        this.bRotY2 = y2;
        this.bRotY3 = y3;

    }

    translate(dx, dy){

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.trans.translate2D(this.points[i], dx, dy);
        }

        this.bRotX1 = this.points[0].get(1);
        this.bRotX2 = this.points[1].get(1);
        this.bRotX3 = this.points[2].get(1);

        this.bRotY1 = this.points[0].get(2);
        this.bRotY2 = this.points[1].get(2);
        this.bRotY3 = this.points[2].get(2);
    }

    rotate(angle){

        this.bX = (this.bRotX1 + this.bRotX2 + this.bRotX3) / 3;
        this.bY =  (this.bRotY1 + this.bRotY2 + this.bRotY3) / 3;

        for(let i = 0; i < this.points.length; i++){
            //console.log("moving point " + this.points[i].get(1), this.points[i].get(2) + " to center.")
            this.points[i] = this.trans.translate2D(this.points[i], -this.bX, -this.bY);
            this.points[i] = this.trans.rotate2D(this.points[i], angle);
            this.points[i] = this.trans.translate2D(this.points[i], this.bX, this.bY);
        }
    }

    draw() {
        strokeWeight(1);
        beginShape(TRIANGLES);
        
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));

        //console.log("PONTO 1 = " + this.points[0].get(1), this.points[0].get(2));
        //console.log("PONTO 2 = " + this.points[1].get(1), this.points[1].get(2));
        //console.log("PONTO 3 = " + this.points[2].get(1), this.points[2].get(2));

        endShape(CLOSE);
    }
}