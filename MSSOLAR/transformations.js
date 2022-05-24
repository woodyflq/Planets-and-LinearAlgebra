class Transformations {

    checkVector(Vector) {
        if(!(Vector instanceof Matrix) || typeof Vector != "object") {
            throw "O parametro Vector precisa ser do tipo Vector."
        }
    }

    checkVectorDimensions2D(Vector) {
        if(Vector.rows != 2){
            throw "O vetor deve ter duas, e somente duas, dimensoes."
        }
    }

    checkVectorDimensions3D(Vector) {
        if(Vector.rows != 3){
            throw "O vetor deve ter tres, e somente tres, dimensoes."
        }
    }

    checkVectorDimensions4D(Vector) {
        if(Vector.rows != 4){
            throw "O vetor deve ter quatro, e somente quatro, dimensões."
        }
    }

    basicOperations(vector, mCanonica) {
        let c = vector;

        let value = [];

        for(let i = 0; i < c.size; i++) {
            value.push(c.values[i]);
        }
        value.push(c.values[1]);

        let d = new Vector(c.size+1, value);
        let linAlg = new LinearAlgebra;
        d = linAlg.dot(mCanonica, d);
        d.values.pop();
        return d;
    }

    basicOperations(vector, mCanonica, homogenian) {
        
        let c = vector;

        let linAlg = new LinearAlgebra;
        c = linAlg.dot(mCanonica, c);
        //c.values.pop();
        return c;
    }

    translate2D(vector, dx, dy){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 3){
            throw "Não possui três dimensões"
        }
        
        let v = new Vector(vector.rows,vector.values.slice())

        let matrix = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                  
        }
        v.set(i, value)
    }
    //console.log(v)
    return v

    } 

    translate3D(vector, dx, dy, dz){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }

        let v = new Vector(vector.rows,vector.values.slice())

        let matrix = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                
        }
        v.set(i, value)  
    }
    return v
    }

    translate3Dx(vector, dx){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }

        let v = new Vector(vector.rows,vector.values.slice())

        let matrix = new Matrix(4,4,[1,0,0,dx,0,1,0,0,0,0,1,0,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                
        }
        v.set(i, value)  
    }
    return v
    }
    
    translate3Dy(vector, dy){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }

        let v = new Vector(vector.rows,vector.values.slice())

        let matrix = new Matrix(4,4,[1,0,0,0,0,1,0,dy,0,0,1,0,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                
        }
        v.set(i, value)  
    }
    return v
    }
    
    translate3Dz(vector, dz){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }

        let v = new Vector(vector.rows,vector.values.slice())

        let matrix = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,1,dz,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
            }
        }
    }

    checkAngle(angle) {
        if(angle == null) {
            throw "Passe o ângulo."
        }
    }

    rotate2D(vector, angle){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 3){
            throw "Não possui três dimensões"
        }
        if(typeof angle != "number"){
            throw "não é número"
        }
        
        var value = 0
        let v = new Vector(vector.rows,vector.values.slice())
        let resp = new Vector(3,[0,0,0])
        let matrix = new Matrix(3,3,[Math.cos(angle),-Math.sin(angle),0,Math.sin(angle),Math.cos(angle),0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) { 
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
     
        }

        resp.set(i, value)
        value = 0
    }
    return resp
    }

    rotate3Dx(vector, angle){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }
        let v = new Vector(vector.rows,vector.values.slice())
        let resp = new Vector(4,[0,0,0,0])
        let matrix = new Matrix(4,4,[1,0,0,0,0,Math.cos(angle),-1*Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                 
        }
        resp.set(i, value) 
    }
    return resp
    }
    rotate3Dy(vector, angle){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }
        let v = new Vector(vector.rows,vector.values.slice())
        let resp = new Vector(4,[0,0,0,0])
        let matrix = new Matrix(4,4,[Math.cos(angle),0,-1*Math.sin(angle),0,0,1,0,0,Math.sin(angle),0,Math.cos(angle),0,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
                 
        }
        resp.set(i, value) 
    }
    return resp
    }
    rotate3Dz(vector, angle){
        if (typeof vector != "object" || (!vector instanceof Vector)){
            throw "Não é um vetor"
        }
        if(vector.rows != 4){
            throw "Não possui quatro dimensões"
        }
        let v = new Vector(vector.rows,vector.values.slice())
        let resp = new Vector(4,[0,0,0,0])
        let matrix = new Matrix(4,4,[Math.cos(angle),-1*Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1,0,0,0,0,1])
        
        for (let i = 1; i <= v.rows; i++) {
            let value = 0
            for (let k = 1; k <= matrix.cols; k++) {
                value += v.get(k) * matrix.get(i, k)
               
        }
        resp.set(i, value) 
    }
    return resp
    }

    checkValue(value) {
        if(value == null) {
            throw "Passe o Value"
        }
    }

    scale2Dx(vector, value) {
        this.checkValue(value);
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[value,0,0,0,1,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    scale2Dy(vector, value) {
        this.checkValue(value);
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[1,0,0,0,value,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    scale3Dx(vector, value) {
        this.checkValue(value);
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        //let mCanonica = new Matrix(3,3,[value,0,0,0,1,0,0,0,1]);
        let mCanonica = new Matrix(4,4,[value,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]);
        return this.basicOperations(vector, mCanonica);
    }

    scale3Dy(vector, value) {
        this.checkValue(value);
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        let mCanonica = new Matrix(4,4,[1,0,0,0,value,0,0,0,1,0,0,0,1,0,0,0]);
        return this.basicOperations(vector, mCanonica);
    }

    scale3Dz(vector, value) {
        this.checkValue(value);
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        let mCanonica = new Matrix(4,4,[1,0,0,0,1,0,0,0,value,0,0,0,1,0,0,0]);
        return this.basicOperations(vector, mCanonica);
    }

    reflection2Dx(vector) {
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    reflection2Dy(vector) {
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    reflection3Dx(vector) {
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        let mCanonica = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    reflection3Dy(vector) {
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        let mCanonica = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    reflection3Dz(vector) {
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);

        let mCanonica = new Matrix(4,4,[-1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    projection2Dx(vector){
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[1,0,0,0,0,0,0,0,1]);

        return this.basicOperations(vector, mCanonica);
    }

    projection2Dy(vector){
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[0,0,0,0,1,0,0,0,1]);

        return this.basicOperations(vector, mCanonica);
    }

    projection3Dxy(vector){
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);
        let mCanonica = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    projection3Dyz(vector){
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);
        let mCanonica = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    projection3Dxz(vector){
        this.checkVector(vector);
        this.checkVectorDimensions3D(vector);
        let mCanonica = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    shearing2Dx(vector, k) {
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[1,k,0,0,1,0,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }

    shearing2Dy(vector, k) {
        this.checkVector(vector);
        this.checkVectorDimensions2D(vector);

        let mCanonica = new Matrix(3,3,[1,0,0,k,0,1,0,0,1]);
        return this.basicOperations(vector, mCanonica);
    }
}