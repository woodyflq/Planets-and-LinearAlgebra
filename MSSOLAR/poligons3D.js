class parallelogram {

    constructor(x,y,z,w,h,l) {

        this.points = [];

        this.points.push(new Vector(4, [x,y,z,1]));
        this.points.push(new Vector(4, [x+w,y,z,1]));
        this.points.push(new Vector(4, [x+w,y+h,z,1]));
        this.points.push(new Vector(4, [x,y+h,z,1]));

        this.points.push(new Vector(4, [x,y,z-l,1]));
        this.points.push(new Vector(4, [x+w,y,z-l,1]));
        this.points.push(new Vector(4, [x+w,y+h,z-l,1]));
        this.points.push(new Vector(4, [x,y+h,z-l,1]));

        this.center = [x, y, z]

        this.middleX = w/2
        this.middleY = h/2
        this.middleZ = z/2

        this.trans = new Transformations()

        print("Centro do paralelogramo = " + this.middleX + ", " + this.middleY + ", " + this.middleZ)

    }

    rotate(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], -this.center[0] - this.middleX, -this.center[1] - this.middleY, -this.middleZ)
            //this.points[i] = this.trans.translate3D(this.points[i], this.middleX, this.middleY, this.middleZ)

            this.points[i] = this.trans.rotate3Dx(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dz(this.points[i], angle)

            //this.points[i] = this.trans.translate3D(this.points[i], -this.middleX, -this.middleY, -this.middleZ)
            this.points[i] = this.trans.translate3D(this.points[i], this.center[0] + this.middleX, this.center[1] + this.middleY, this.middleZ)
        }
    }

    translate(dx,dy,dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], dx, dy, dz)
        }
    }

    draw(){

        beginShape(TRIANGLES);

        //Frontal Face
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

            vertex(this.points[1].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[2].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        
        //Back Face
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        //Left Face
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        
        //Right Face
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

        //Top Face
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));

        //Bottom Face
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
            
        endShape(CLOSE);

    }

}

class plane {

    constructor(x,y,z,w,l) {
        this.points = []
            
        this.points.push(new Vector(4, [x,y,z,1]))
        this.points.push(new Vector(4, [x,y-l,z,1]))
        this.points.push(new Vector(4, [x+w,y-l,z,1]))
        this.points.push(new Vector(4, [x+w,y,z,1]))

        this.posX = x
        this.posY = y
        this.posZ = z

        this.middleX = w/2
        this.middleY = -l/2
        this.middleZ = z

        this.trans = new Transformations()

    }

    translate(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], dx, dy, dz);
        }
    }

    rotate(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], -this.posX -this.middleX, -this.posY -this.middleY, -this.posZ -this.middleZ);

            this.points[i] = this.trans.rotate3Dx(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dz(this.points[i], angle)

            this.points[i] = this.trans.translate3D(this.points[i],this.posX + this.middleX, this.posY + this.middleY, this.posZ + this.middleZ);
        }
    }

    draw() {

        strokeWeight(0.1);
        beginShape(LINES);
        
        for(let i = 0; i < this.points.length; i++) {
            vertex(this.points[i].get(1), this.points[i].get(2), this.points[i].get(3))
        }
        
        endShape(CLOSE);
    }
}

class sphere {
    constructor(x,y,z,r,st,se) {
        this.points = []

        this.points.push(new Vector(4, [0, 0, 0, 1]))
        this.points.push(new Vector(4, [0+r, 0, 0, 1]))
        this.radius = r
        this.stackCount = st
        this.sectorCount = se
        this.color = '#ffffff';

        this.stackStep = Math.PI *2/ this.stackCount
        this.sectorStep = Math.PI * 2 / this.sectorCount

        this.trans = new Transformations()

        this.normals = []
        this.texCoord = []

        let xx,yy,zz,xxyy
        let nx,ny,nz,lengthInv = 1 / this.radius



        for(let i = 0; i <= this.stackCount; i++) {
            
            let stackAngle = Math.PI / 2 - i * this.stackStep
            xxyy = this.radius * Math.cos(stackAngle)
            let posZ = this.radius * Math.sin(stackAngle)

            for(let j = 0; j <= this.sectorCount; j++) {

                let sectorAngle = j * this.sectorStep
                
                let posX = xxyy * cos(sectorAngle)
                let posY = xxyy * Math.sin(sectorAngle)
                

                this.points.push(new Vector(4, [posX, posY, posZ, 1]))

                //normalized

                nx = posX * lengthInv
                ny = posY * lengthInv
                nz = posZ * lengthInv

                this.normals.push(new Vector(4, [nx, ny, nz, 1]))

                //tex coord

                let s = j/this.sectorCount
                let t = i/this.stackCount
                this.texCoord.push(s)
                this.texCoord.push(t)
            }   
        }


        this.indices = []
        let k1, k2
        for(let i = 0; i < this.stackCount; i++) {
            k1 = i*(this.sectorCount+1)
            k2 = k1+this.sectorCount+1

            for(let j = 0; j < this.sectorCount; j++, k1++, k2++) {
                if(i != 0) {
                    this.indices.push(k1)
                    this.indices.push(k2)
                    this.indices.push(k1+1)
                }

                if(i != (this.stackCount-1)) {
                    this.indices.push(k1+1)
                    this.indices.push(k2)
                    this.indices.push(k2+1)
                }
            }
        }

        //print(this.indices)

        this.originalX = x
        this.originalY = y
        this.originalZ = z

        //Translate to Center.
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], this.originalX, this.originalY, this.originalZ)
        }

        

        //print(this.points)
        this.actualPosition = [this.points[0].get(1), this.points[0].get(2), this.points[0].get(3)]
    }

    rotate(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],-this.originalX, -this.originalY, -this.originalZ)

            this.points[i] = this.trans.rotate3Dx(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dz(this.points[i], angle)

            this.points[i] = this.trans.translate3D(this.points[i], this.originalX, this.originalY, this.originalZ)
        }
    }

    rotateY(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            //this.actualPosition = [this.points[0].get(1), this.points[0].get(2), this.points[0].get(3)]
            //console.log("Pos X = " + this.actualPosition[0], "Pos Y = " + this.actualPosition[1], "Pos Z = " + this.actualPosition[2])
        }
    }

    translate(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i], dx, dy, dz)
        }
    }

    rotateFollowingObject(angle, customCenterX, dx, dy, dz, xObj, yObj, zObj, rObj) {
        

        let keepGoing = 0
        for(let i = 0; i < this.points.length; i++) {

            this.points[i] = this.trans.translate3D(this.points[i], -(dx - customCenterX) , -dy, -dz)
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            this.points[i] = this.trans.translate3D(this.points[i], (dx - customCenterX), dy, dz)
        }
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw() {
        strokeWeight(0)
        //stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        //print(this.points)

        for(let i = 0; i < this.indices.length-4; i++) {
                
           vertex(this.points[this.indices[i]].get(1), this.points[this.indices[i]].get(2), this.points[this.indices[i]].get(3))

           //vertex(this.points[this.indices[i+1]].get(1), this.points[this.indices[i+1]].get(2), this.points[this.indices[i+1]].get(3))

           //vertex(this.points[this.indices[i+4]].get(1), this.points[this.indices[i+4]].get(2), this.points[this.indices[i+4]].get(3))

        }

        endShape()
    }
}

class pyramid {
    constructor(x,y,z,w,h,hp) {
        this.points = []

        this.points.push(new Vector(4, [x,y,z,1]))
        this.points.push(new Vector(4, [x+w,y,z,1]))
        this.points.push(new Vector(4, [x+w,y,z+h,1]))
        this.points.push(new Vector(4, [x,y,z+h,1]))
        this.points.push(new Vector(4, [x + w/2, y + -hp, z+h/2, 1]))
        this.height = hp
        this.width = w

        this.posX = x
        this.posY = y
        this.posZ = z

        this.middleX = w/2
        this.middleY = -hp/2
        this.middleZ = h/2

        this.trans = new Transformations()
        this.pontos = [0,1,3,1,2,3,0,1,4,0,3,4,3,2,4,1,2,4];
    }

    rotate(angle) {
        for(let i = 0; i < this.points.length; i++){
            let toCenterX = this.width / 2
            let toCenterY = this.posY / 2
            let toCenterZ = this.height / 2

            //this.points[i] = this.trans.translate3D(this.points[i], -(toCenterX + this.posX), -this.PosY, -(this.toCenterZ + this.posZ))
            this.points[i] = this.trans.translate3D(this.points[i], -this.posX -this.middleX, -this.posY -this.middleY, -this.posZ -this.middleZ)

            this.points[i] = this.trans.rotate3Dx(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dy(this.points[i], angle)
            this.points[i] = this.trans.rotate3Dz(this.points[i], angle)

            
            this.points[i] = this.trans.translate3D(this.points[i], this.posX + this.middleX, this.posY + this.middleY, this.posZ + this.middleZ)
            //this.points[i] = this.trans.translate3D(this.points[i], toCenterX + this.posX, this.posY, this.toCenterZ + this.posZ)
        }
    }

    draw() {
        strokeWeight(0.1)
        beginShape(TRIANGLES)

        for(let i = 0; i < this.pontos.length; i++){             
            vertex(this.points[this.pontos[i]].get(1), this.points[this.pontos[i]].get(2), this.points[this.pontos[i]].get(3));         
        }

        endShape(CLOSE)
    }
}
