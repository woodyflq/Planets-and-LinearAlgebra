let parallelogram3D, plane3D, shere3D, pyramid3D
let rectangle2D, triangle2D, line2D, circle2D


let sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, pluto 

function setup(){
    createCanvas(1280, 720, WEBGL);
    createEasyCam();


        this.rDistance = -(147*Math.pow(10,1) + 693)
        this.rRadius = 6.371
        this.resolution = 12

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
    
    parallelogram3D = new parallelogram(-200,100,0,50,50,50);
    plane3D = new plane(-100,150,0,50,50);
    pyramid3D = new pyramid(0,150,-50,50,50,50);
    sphere3D = new sphere(100,125,0,25,16,16);
    
    rectangle2D = new rectangle(-200,0,50,50);
    triangle2D = new triangle(-50 -50,50,0 - 50,0,50 - 50,50);
    line2D = new line(0, 0, 150, 25);
    circle2D = new circle(250, 25, 40, 16);
    
    
}

function draw(){
    
    background(52);
 
    rectangle2D.rotate(Math.PI/200)
    triangle2D.rotate(Math.PI/200)
    line2D.rotate(Math.PI/200)
    circle2D.rotate(Math.PI/200) 

    rectangle2D.draw()
    triangle2D.draw()
    line2D.draw()
    circle2D.draw()
    

    parallelogram3D.draw()
    plane3D.draw()
    sphere3D.draw()
    pyramid3D.draw()

    parallelogram3D.rotate(Math.PI/200)
    plane3D.rotate(Math.PI/200)
    pyramid3D.rotate(Math.PI/200)
    sphere3D.rotate(Math.PI/200)

    


        
}