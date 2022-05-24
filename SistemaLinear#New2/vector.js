class Vector extends Matrix{

    constructor(dim,values){
        super(dim,1,values)
        this.size = dim;
    }

    get(i){
        if (this.rows >=this.cols){
            return super.get(i,1)
        }else {
            return super.get(1,i)
        }
    }
    set(i,value){
        if (this.rows >= this.cols){
            return super.set(i,1,value)
        }else{
            return super.set(1,i,value)
        }
    }
}