let rectangle2D, triangle2D, line2D, circle2D
let parallelogram3D, plane3D, shere3D, pyramid3D


let sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, pluto 

function setup(){
    createCanvas(1280, 720, WEBGL);
    createEasyCam();

        this.rDistance = -(147*Math.pow(10,1) + 693)
        this.rRadius = 6.371
        this.resolution = 24

    sun = new sphere(0,0,0,696.340, this.resolution, this.resolution)
    earth = new sphere(this.rDistance, 0, 0, this.rRadius, this.resolution, this.resolution)
    mercury = new sphere(0.387 * this.rDistance, 0, 0, 0.383 * this.rRadius, this.resolution, this.resolution)
    venus = new sphere(0.723 * this.rDistance, 0, 0, 0.95 * this.rRadius, this.resolution, this.resolution)
    moon = new sphere(1 * this.rDistance - 38.4, 0, 0, 0.2724 * this.rRadius, this.resolution, this.resolution)
    mars = new sphere(1.52 * this.rDistance, 0, 0, 0.532 * this.rRadius, this.resolution, this.resolution)
    jupiter = new sphere(5.2 * this.rDistance, 0, 0, 11.21 * this.rRadius, this.resolution, this.resolution)
    saturn = new sphere(9.58 * this.rDistance, 0, 0, 9.45 * this.rRadius, this.resolution, this.resolution)
    uranus = new sphere(19.20 * this.rDistance, 0, 0, 4.01 * this.rRadius, this.resolution, this.resolution)
    neptune = new sphere(30.05 * this.rDistance, 0, 0, 3.88 * this.rRadius, this.resolution, this.resolution)
    pluto = new sphere(39.48 * this.rDistance, 0, 0, 0.186 * this.rRadius, this.resolution, this.resolution)

    sun.setColor("#f9d71c");
    earth.setColor("#4e6172");
    mercury.setColor("#ed5314");
    venus.setColor("#cc3a00");
    moon.setColor("#cacaca");
    mars.setColor("#bc2731");
    jupiter.setColor("#fe8a64");
    saturn.setColor("#2c2c54");
    uranus.setColor("#be1e4");
    neptune.setColor("#3e54e8");
    pluto.setColor("#968570");

    
}

function draw(){
    
    background(52);       
    sun.draw();

    earth.draw();
    earth.rotateY(Math.PI/365);
    earth.translate(0,0,1)

    mercury.draw();
    mercury.rotateY(Math.PI/365 * 1.59);
    mercury.translate(0,0,1);

    venus.draw();
    venus.rotateY(Math.PI/365 * 1.18);
    venus.translate(0,0,1);

    moon.draw();
    moon.rotateY(Math.PI/365);
    moon.translate(0,0,1);

    moon.rotateFollowingObject(Math.PI/24, -38.4, 1 * this.rDistance - 38.4, 0, 0, 0, 0, 1, Math.PI/365)

    mars.draw();
    mars.rotateY(Math.PI/365 * 0.808);
    mars.translate(0,0,1);

    jupiter.draw();
    jupiter.rotateY(Math.PI/365 * 0.439);
    jupiter.translate(0,0,1);

    saturn.draw();
    saturn.rotateY(Math.PI/365 * 0.325);
    saturn.translate(0,0,1);

    uranus.draw();
    uranus.rotateY(Math.PI/365 * 0.228);
    uranus.translate(0,0,1);

    neptune.draw();
    neptune.rotateY(Math.PI/365 * 0.182);
    neptune.translate(0,0,1);

    pluto.draw();
    pluto.rotateY(Math.PI/365 * 0.157);
    pluto.translate(0,0,1);

}