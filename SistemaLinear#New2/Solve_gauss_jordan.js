const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener('change', function(event){

    const file = event.target.files[0];
    if(file){
        let reader = new FileReader();
        let fisrtLine = true;

        reader.onload = function(){
            
            let lines = reader.result.split('\n')
            let matrix;

            for(let i = 0; i< lines.length; i++){
                if(!lines[i].startsWith('%')){

                    let aux = lines[i].split(' ');

                    if(fisrtLine){
                        matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]));
                        fisrtLine = false;
                    } else {
                        matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]));
                    }
                }
            }
            let la = new LinearAlgebra()
            let start = Date.now();
            la.solve(matrix)
            let stop = Date.now();
            let elapsedTime = stop - start;
            
            console.log(elapsedTime)
            console.log(la.solve(matrix))
            
        };

        reader.readAsText(file);

    }

})