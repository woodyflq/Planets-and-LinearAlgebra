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

    plus(a, b) {
        if (typeof a != "object" || !(a instanceof Matrix)) {
            throw "o primeiro paramentro deve ser um objeto do tipo matrix."
        } else if (typeof b != "object" || !(b instanceof Matrix)) {
            throw "o segundo paramentro deve ser um objeto do tipo matrix."
        }



        if (a.rows != b.rows || a.cols != b.cols) {
            throw "As matrizes são incompatíveis"

        }

        let c = new Matrix(a.rows, a.cols);

        for (let i = 1; i <= c.rows; i++) {
            for (let j = 1; j <= c.cols; j++) {
                c.set(i, j, a.get(i, j) + b.get(i, j));
            }
        }

        return c
    }

    times(a, b) {
        if (typeof a != "object" || !(a instanceof Matrix)) {
            throw "o primeiro paramentro deve ser um objeto do tipo matrix."
        } else if (typeof b != "object" || !(b instanceof Matrix)) {
            throw "o segundo paramentro deve ser um objeto do tipo matrix."
        }

        let c = new Matrix(b.rows, b.cols);

        if (typeof a == "number") {
            for (let i = 1; i <= c.rows; i++) {
                for (let j = 1; j <= c.cols; j++) {
                    c.set(i, j, a * b.get(i, j));
                }
            }
        } else if (typeof a == "object" && a instanceof Matrix) {

            //verificando se as matrizess possuem o mesmo tamanho
            if (a.rows != b.rows || a.cols != b.cols) {
                throw "As matrizes são incompatíveis"
            }
            for (let i = 1; i <= c.rows; i++) {
                for (let j = 1; j <= c.cols; j++) {
                    c.set(i, j, a.get(i, j) * b.get(i, j));
                }
            }
        } else {
            throw "O primeiro paramentro deve ser um escalar numerico ou um objeto do tipo matriz"
        }

        return c
    }

    div(a, b) {
        //verificando se os parametros a e b são matrizes
        if (typeof b != "object" || !(b instanceof Matrix || typeof a != "object" || !(a instanceof Matrix))) {
            throw "os parametros devem ser do tipo matriz."
        }
        //verificando se as matrizess possuem o mesmo tamanho
        if (a.rows != b.rows || a.cols != b.cols) {
            throw "As matrizes são incompatíveis"
        }

        //verificando se a matriz b contem algum elemento nulo
        for (let i = 0; i < b.values.length; i++) {
            if (b.values[i] == 0) {
                throw "A matriz b contem pelomenos um elemento nulo"
            }
        }

        let c = new Matrix(b.rows, b.cols);

        for (let i = 1; i <= c.rows; i++) {
            for (let j = 1; j <= c.cols; j++) {
                c.set(i, j, a.get(i, j) / b.get(i, j));
            }
        }
        return c
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
    solveR(a, k, linha1, linha2) {

        this.#isMatrix(a)

        if (linha1 < 1 || linha1 > a.rows) {
            throw "linha 1 inexistente"
        }

        if (typeof k != "number") {
            throw "a constante k tem que ser número"
        }

        if (linha2 < 1 || linha2 > a.rows) {
            throw "linha 2 não existe"
        }

        for (let j = 1; j <= a.cols; j++) {
            a.set(linha2, j, (a.get(linha2, j) + (a.get(linha1, j) * k)));

        }
    }

    solveC(a, k, i) {

        this.#isMatrix(a)

        if (i < 1 || i > a.cols) {
            throw "linha inexistente"
        }


        if (typeof k != "number") {
            throw "a constante k tem que ser número"
        }

        for (let j = 1; j <= a.cols; j++) {
            a.set(i, j, Math.round(k * a.get(i, j)))
            if (a.get(i, j) == -0) {
                a.set(i, j, 0)
            }
        }


    }
    det(a){
        let resp = this.gauss(a)
        let det = resp.coef
        

        for(let i = 1;i <= resp.matrix.rows;i++){
            det *= resp.matrix.get(i,i)
        }
        return det;
    }
    gauss(a){
        this.#isMatrix(a);
        this.#matrixHasGaussCompability(a)
        let resp = {
            matrix: new Matrix(a.rows,a.cols,a.values.slice()),
            coef: 1
        }
        for (let j = 1; j <= resp.matrix.rows; j++) {
            for (let i = j + 1; i <= resp.matrix.rows; i++) {
                
                if (resp.matrix.get(j, j) == 0) {
                    for (let k = j + 1; k <= resp.matrix.rows; k++) {
                        if (resp.matrix.get(k, j) != 0) {
                            this.ChangeLine(resp.matrix, j, k)
                            resp.coef *= -1;
                            break;
                        }
                    }
                }
                let k = -resp.matrix.get(i, j) / resp.matrix.get(j, j);

                this.solveR(resp.matrix, k, j, i);
            }
        }
        return resp
    }
    ChangeLine(a, i1, i2) {

        this.#isMatrix(a)

        if (i1 < 1 || i1 > a.cols) {
            throw "deve ter a linha 1"
        }

        if (i2 < 1 || i2 > a.cols) {
            throw "deve ter a linha 2"
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
            throw "A matriz tem que ser quadrada";
        }
        let Copia = new Matrix(a.rows, a.cols, a.values.slice())
        let Identidade = new Matrix(3,3,[1,0,0,0,1,0,0,0,1])
        for (let j = 1; j <= Copia.rows; j++) {
            for (let i = j + 1; i <= Copia.rows; i++) {
                if (Copia.get(j, j) == 0) {
                    for (let k = j + 1; k <= Copia.rows; k++) {
                        if (Copia.get(k, j) != 0) {
                            ChangeLine(Copia, j, k);
                            ChangeLine(Identidade, j, k);
                            break;
                        }
                    }
                }
                const k = Copia.get(i, j) * -1 / Copia.get(j, j)
                this.solveR(Copia, j, k, i);
                this.solveR(Identidade, j, k, i);
            }
        }
        for (let j = Copia.rows; j >= 2; j--) {
            for (let i = j - 1; i >= 1; i--) {
                const k = Copia.get(i, j) * -1 / Copia.get(j, j)
                this.solveR(Copia, j, k, i);
                this.solveR(Identidade, j, k, i);
            }
        }
        for (let j = 1; j <= Copia.cols; j++) {
            const k = 1 / Copia.get(j, j)
            this.solveC(Copia, j, k);
            this.solveC(id, j, k);
        }

        return Identidade;
    }





    solve(a) {

        this.#isMatrix(a)
        if (a.cols != a.rows + 1) {
            throw "a matriz deve ser extendida"
        }

        let c = new Matrix(a.rows, a.cols, a.values.slice());
        c = this.gauss(c);

        for (let j = c.cols - 1; j >= 2; j--) {
            for (let i = j - 1; i >= 1; i--) {
                let k = -c.get(i, j) / c.get(j, j);
                this.solveR(c, k, j, i);

            }
        }

        for (let j = 1; j <= c.cols - 1; j++) {
            let k = 1 / c.get(j, j);
            this.solveC(c, k, j);
        }
        let resposta = []
        for (let i = 1; i <= c.rows; i++) {
            resposta[i - 1] = Math.round(c.get(i, c.cols))
        }
        return resposta

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