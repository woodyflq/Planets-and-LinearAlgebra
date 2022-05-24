class Transformations {


    translate2D(x, dx, dy) {
        //if de teste
        if(dx == null || dy == null) {
            throw "Passe o valor de dx e dy!"
        }
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        //Matriz Canonica
        let mGeral = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    translate3D(x, dx, dy, dz) {
          //if de teste
        if(dx == null || dy == null || dz == null) {
            throw "Passe o valor de dx, dy e dz!"
        }
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz canonicas
        let mGeral = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    AnguloTest(y) {
        if(y == null) {
            throw "angulo não definido."
        }
    }
    checkValue(x) {
        if(x == null) {
            throw "vetor não definido"
        }
    }
//3D
    rotation3Dz(x, y) {
         //Metodos privados de teste
        
        this.VectorTest(x);
        this.VetorTest3D(x);
        this.AnguloTest(y);
        
        let degrees = y;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let mGeral = new Matrix(4,4,[cos,-sin,0,0,sin,cos,0,0,0,0,1,0,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    scale3Dx(x,y) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        this.checkValue(y);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[y,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    scale3Dy(x, y) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        this.checkValue(y);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[1,0,0,0,value,0,0,0,1,0,0,0,1,0,0,0]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    scale3Dz(x, y) {
         //Metodos privados de teste
        this.checkValue(y);
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[1,0,0,0,1,0,0,0,y,0,0,0,1,0,0,0]);
        return this.basicOperations(x, mGeral);
    }
    reflection3Dx(x) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1]);
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    reflection3Dy(x) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1]);
        
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    reflection3Dz(x) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[-1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    projection3Dxy(x){
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    projection3Dyz(x){
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    projection3Dxz(x){
         //Metodos privados de teste
        this.VectorTest(x);
        this.VetorTest3D(x);
        //Matriz Canonica
        let mGeral = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    rotation3Dx(x, y) {
         //Metodos privados de teste
        this.AnguloTest(y);
        this.VectorTest(x);
        this.VetorTest3D(x);
        let degrees = y;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let mGeral = new Matrix(4,4,[1,0,0,0,0,cos,-sin,0,0,sin,cos,0,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    rotation3Dy(x, y) {
         //Metodos privados de teste
        this.AnguloTest(y)
        this.VectorTest(x);
        this.VetorTest3D(x);
        let degrees = angle;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let mGeral = new Matrix(4,4,[cos,0,-sin,0,0,1,0,0,sin,0,cos,0,0,0,0,1]);
        return this.basicOperations(vector, mGeral);
    }


    //2D
    shearing2Dy(x, k) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);

        let mGeral = new Matrix(3,3,[1,0,0,k,0,1,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    shearing2Dx(x, k) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);

        let mGeral = new Matrix(3,3,[1,k,0,0,1,0,0,0,1]);
                let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    projection2Dy(x){
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        let mGeral = new Matrix(3,3,[0,0,0,0,1,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    projection2Dx(x){
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);

        let mGeral = new Matrix(3,3,[1,0,0,0,0,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);
        //calculos necessários
        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    reflection2Dy(x) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);

        let mGeral = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    reflection2Dx(x) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        //Matriz Canonica
        let mGeral = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1]);
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    scale2Dx(x, y) {
         //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        this.checkValue(y);
        let mGeral = new Matrix(3,3,[y,0,0,0,1,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }

    scale2Dy(x, y) {
        //Metodos privados de teste
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        this.checkValue(y);
        //Matriz canonica
        let mGeral = new Matrix(3,3,[1,0,0,0,y,0,0,0,1]);
        //calculos necessários
        let vetorRecebido = x;
        let value = [];
        for(let i = 0; i < vetorRecebido.size; i++) {
            value.push(vetorRecebido.values[i]);
        }
        value.push(vetorRecebido.values[1]);

        let vetorHRecebido = new Vector(vetorRecebido.size+1, value);
        let linAlg = new LinearAlgebra;
        vetorHRecebido = linAlg.dot(mGeral, vetorHRecebido);
        vetorHRecebido.values.pop();
        return vetorHRecebido;
    }
    rotation2D(x, y) {
        //Metodos privados de teste
        this.AnguloTest(y)
        this.VectorTest(x);
        this.VectorTestDimensions2D(x);
        //Matriz canonica
        let degrees = y;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let mGeral = new Matrix(3,3,[cos,-sin,0,sin,cos,0,0,0,1]);
        return this.basicOperations(vector, mGeral);
    }
    VectorTest(x) {
        if(!(x instanceof Matrix) || typeof x != "object") {
            throw "é necessario ser do tipo Vetor."
        }
    }

    VectorTestDimensions2D(x) {
        if(x.rows != 2){
            throw "é necessario o vetor ter 2 dimensoes."
        }
    }

    VetorTest3D(x) {
        if(x.rows != 3){
            throw "é necessario o vetor ter 3 dimensoes."
        }
    }
}