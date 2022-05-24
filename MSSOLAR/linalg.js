class LinearAlgebra {

    transpose(a) {
        let c;
        if (a instanceof Vector) {
            c = new Vector(a.size)
            c.rows = a.cols;
            c.cols = a.rows;

            for (let i = 1; i <= c.size; i++) {
                c.set(i, a.get(i));
            }
        } else if (a instanceof Matrix) {
            c = new Matrix(a.cols, a.rows)

            for (let i = 1; i <= c.rows; i++) {
                for (let j = 1; j <= c.cols; j++) {
                    c.set(i, j, a.get(j, i));
                }
            }
        } else {
            throw "O parametro deve ser um objeto do tipo vetor ou matriz."
        }

        return c;
    }
    
    plus(matrix, matrix2) {
        if(matrix.rows != matrix2.rows || matrix.cols != matrix2.cols) {
            throw "As matrizes são incompatíveis.";
        }

        let c = new Matrix(matrix.rows, matrix.cols);

        for(let i = 1; i <= matrix.rows; i++) {
            for(let j = 1; j <= matrix.cols; j++) {
                c.set(i,j, matrix.get(i,j) + matrix2.get(i,j));
            }
        }

        return c;
    }

    times(a, b) {

        if(typeof b != "object" || !(b instanceof Matrix)){
            throw "O segundo parâmetro deve ser um objeto do tipo Matrix."
        }

        let c = new Matrix(b.rows, b.cols);

        if (typeof a == "number") {
            for(let i = 1; i <= a.rows; i++) {
                for(let j = 1; j <= a.cols; j++) {
                    c.set(i,j, a * b.get(i,j));
                }
            }            
        } else if(typeof a == "object" && a instanceof Matrix){

            //Verificando se as matrizes são do mesmo tamanho.
            if(matrix.rows != matrix2.rows || matrix.cols != matrix2.cols) {
                throw "As matrizes são incompatíveis.";
            }

            for(let i = 1; i <= a.rows; i++) {
                for(let j = 1; j <= a.cols; j++) {
                    c.set(i,j, a.get(i,j) * b.get(i,j));
                }
            } 
        } else {
            throw "O primeiro parâmetro deve ser um escalar numérico ou objeto tipo Matrix."
        }

        return c;
    }

    div(a,b) {

        //Verificando se os parâmetros são matrizes.
        if(typeof b != "object" || !(b instanceof Matrix) || typeof a != "object" || !(a instanceof Matrix)){
            throw "Os parâmetros devem ser objetos do tipo Matrix."
        }

        //Verificando se as matrizes são do mesmo tamanho.
        if(a.rows != b.rows || a.cols != b.cols) {
            throw "As matrizes são incompatíveis.";
        }

        //Verificando se a matriz b tem algum elemento nulo.
        for(let i = 0; i<b.values.length; i++) {
            if(b.values[i] == 0) {
                throw "A matriz b contém pelo menos um elemento nulo";
            }
        }

        let c = new Matrix(b.rows, b.cols);

        for(let i = 1; i <= a.rows; i++) {
            for(let j = 1; j <= a.cols; j++) {
                c.set(i,j, a.get(i,j) / b.get(i,j));
            }
        } 

        return c;

    }

    dot(a, b) {

        //Verificando se os parâmetros são matrizes.
        if(typeof b != "object" || !(b instanceof Matrix) || typeof a != "object" || !(a instanceof Matrix)){
            throw "Os parâmetros devem ser objetos do tipo Matrix."
        }

        //Verificando se as matrizes são do mesmo tamanho.
        if(a.cols != b.rows) {
            throw "As matrizes são incompatíveis.";
        }

        let c = new Matrix(a.rows, b.cols);

        for(let i = 1; i <= a.rows; i++) {
            for(let j = 1; j <= b.cols; j++) {
                for(let k = 1; k <= a.cols; k++) {
                    c.set(i,j, c.get(i,j) + a.get(i,k) * b.get(k,j));  
                }
            }
        }

        return c;

    }

    TrocarLinhaPorLinha(a, k, f, l) {

        if (typeof a != "object" || (!a instanceof Matrix)) {
            throw "Parâmetros errados! Precisam ser da classe matrix."
        }
        if (typeof k != "number") {
            throw "k deve ser um número"
        }
        if (f < 1 || f > a.rows) {
            throw "Não foi possível encontrar a linha 1"
        }
        if (l < 1 || l > a.rows) {
            throw "Não foi possível encontrar a linha 2"
        }
        
        for (let j = 1; j <= a.cols; j++) {
            a.set(l, j, (a.get(l, j) + (a.get(f, j) * k)));

        }
    }

    LinhaConstante(a, k, i) {

        if (typeof a != "object" || (!a instanceof Matrix)) {
            throw "os parametros devem ser matrizes"
        }

        if (typeof k != "number") {
            throw "k deve ser um número"
        }

        if (i < 1 || i > a.cols) {
            throw "linha inexistente"
        }

        for (let j = 1; j <= a.cols; j++) {
            a.set(i, j, Math.round(k * a.get(i, j)))
            if(a.get(i, j)== -0){
                a.set(i,j,0)
            }
        }


    }
    
    solve(a) {

        if (typeof a != "object" || (!a instanceof Matrix)) {
            throw "Parâmetro inválido, deve pertencer à classe matrix";
        }
        if (a.cols != a.rows + 1) {
            throw "A matriz não está extendida.";
        }

        let c = new Matrix(a.rows, a.cols, a.values.slice());

        c = this.gauss(c);

        for (let j = c.cols - 1; j >= 2; j--) {
            for (let i = j - 1; i >= 1; i--) {

                let pivo = c.get(j, j);
                let b = c.get(i, j);
                let k = -b / pivo;

                this.TrocarLinhaPorLinha(c, k, j, i);
                
            }
        }

        for (let j = 1; j <= c.cols - 1; j++) {
            let k = 1 / c.get(j, j);
            this.LinhaConstante(c, k, j);
        }

        let answer = []
        
        for (let i = 1; i <= c.rows; i++) {
            answer[i -1] = Math.round(c.get(i, c.cols)) 
        }

        return answer



    }

    gauss(a){
        this.#isMatrix(a);
        this.#matrixHasGaussCompability(a)
        if (typeof a != "object" || (!a instanceof Matrix)) {
            throw "o parametro deve ser matriz"
        }
        let resp = {
            matrix: new Matrix(a.rows,a.cols,a.values.slice()),
            coef: 1
        }
        for (let j = 1; j <= resp.matrix.cols; j++) {
            for (let i = j + 1; i <= resp.matrix.rows; i++) {
                
                if (resp.matrix.get(j, j) == 0) {
                    for (let k = j + 1; k <= resp.matrix.rows; k++) {
                        if (resp.matrix.get(k, j) != 0) {
                            this.trocaLinha(resp.matrix, j, k)
                            resp.coef *= -1;
                            break;
                        }
                    }
                }
                let k = -resp.matrix.get(i, j) / resp.matrix.get(j, j);

                this.TrocarLinhaPorLinha(resp.matrix, k, j, i);
            }
        }
        return resp
    }

    det(a){
        let resp = this.gauss(a)
        let det = resp.coef

        for(let i = 1;i <= resp.matrix.rows;i++){
            det *= resp.matrix.get(i,i)
        }
        return det;
    }

    trocaLinha(a, i1, i2) {

            if (typeof a != "object" || (!a instanceof Matrix)) {
                throw "os parametros devem ser matrizes"
            }

            if (i1 < 1 || i1 > a.cols) {
                throw "linha 1 inexistente"
            }

            if (i2 < 1 || i2 > a.cols) {
                throw "linha 2 inexistente"
            }

            let aux = [];

            for (let j = 1; j <= a.cols; j++) {
                aux[j - 1] = a.get(i1, j);
                a.set(i1, j, a.get(i2, j));
                a.set(i2, j, aux[j - 1]);
            }



    }

    inverse(a) {
        this.#isMatrix(a);

        if (a.rows != a.cols) {
            throw "A matriz deve ser quadrada";
        }

        let c = new Matrix(a.rows, a.cols, a.values.slice())
        let id = this.identidade(a);

        for (let j = 1; j <= c.rows; j++) {

            for (let i = j + 1; i <= c.rows; i++) {

                if (c.get(j, j) == 0) {
                    for (let k = j + 1; k <= c.rows; k++) {
                        if (c.get(k, j) != 0) {
                            this.mudarLinhas(c, j, k);
                            this.mudarLinhas(id, j, k);
                            break;
                        }
                    }
                }
                const k = c.get(i, j) * -1 / c.get(j, j)
                this.multiplicarLinhaConstante(c, j, k, i);
                this.multiplicarLinhaConstante(id, j, k, i);
            }
        }

        for (let j = c.rows; j >= 2; j--) { // Parte superior //

            for (let i = j - 1; i >= 1; i--) {
                const k = c.get(i, j) * -1 / c.get(j, j)
                this.multiplicarLinhaConstante(c, j, k, i);
                this.multiplicarLinhaConstante(id, j, k, i);
            }

        }

        for (let j = 1; j <= c.cols; j++) {
            const k = 1 / c.get(j, j)
            this.DiagonalPrincipal(c, j, k);
            this.DiagonalPrincipal(id, j, k);
        }

        return id;
    }

    mudarLinhas(a, linha1, linha2) {
        for (let i = 1; i <= a.cols; i++) {
    
            const aux = a.get(linha1, i);
    
            a.set(linha1, i, a.get(linha2, i));
            a.set(linha2, i, aux);
    
        }
    }
    
    multiplicarLinhaConstante(a, l1, k, l2) {
    
        for (let j = 1; j <= a.cols; j++) {
    
            a.set(l2, j, (a.get(l1, j) * k + a.get(l2, j)));
    
        }
    }
    
    DiagonalPrincipal(a , l1 , k){
        for(let i = 1 ; i <= a.cols ; i++){
            a.set(l1, i, (k * a.get(l1,i)));
          }
        }

    identidade(a) { 
        if (!(a instanceof Matrix)) throw ("Parâmetros da primeira matriz inválidos");




        let c = new Matrix(a.rows , a.cols , a.values.slice());

        for (let j = 1; j <= c.rows; j++) {

            for (let i = j + 1; i <= c.rows; i++) {

                if (c.get(j, j) == 0) {
                    for(let k = j + 1 ; k <= c.rows ; k++){
                        if(c.get(k,j) != 0){
                            mudarLinhas(c, j , k);

                            break;
                        }
                    }
                }
                this.multiplicarLinhaConstante(c, j, (c.get(i, j) * -1 / c.get(j, j)), i);



            }

        }


        for (let j = c.rows ; j >= 2; j--) { // Parte superior //

            for (let i = j - 1; i >= 1; i--) {

                if (c.get(j, j) != 0) {

                   this.multiplicarLinhaConstante(c, j, c.get(i, j) * -1 / c.get(j, j), i);

                }

            }

        }

        for(let j = 1 ; j <= c.cols  ; j++){
            this.DiagonalPrincipal(c , j , 1 / c.get(j,j));
        }

            return c;

    }
    #matrixHasGaussCompability(a) {
        if (a.cols < a.rows) {
            throw "a matriz passada como parametro possui menos colunas do que linhas"
        }

    }
    #isMatrix(a) {
        if (typeof a != "object" || !(a instanceof Matrix)) {
            throw "o primeiro paramentro deve ser um objeto do tipo matrix."
        }
    }

}