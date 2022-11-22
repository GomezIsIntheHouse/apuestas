const products = []

const golesArg = []
const golesAra = []
const golesPol = []
const golesMex = []

class Producto{
    constructor(){}

    getProducto(){
        return products
    }

    postProduct(product){
        this.sumarGol(product);
        // console.log(parseInt(product.arg1)+1)
        // golesArg = parseInt(golesArg) + parseInt(product.arg1)
        // golesArg = golesArg + parseInt(product.arg2)
        // golesArg = golesArg + parseInt(product.arg3)

        // golesPol = golesPol + parseInt(product.pol)
        // golesMex = golesMex + parseInt(product.mex)
        // golesAra = golesAra + parseInt(product.ara)

       
        // console.log('GOLES SUMADOS',golesArg, golesAra, golesPol, golesMex)

        products.push(product)
        return product
    }

    sumarGol(product){
        // console.log(parseFloat(product.ara))
        let golesArgentina = parseFloat(product.arg1)+parseFloat(product.arg2)+parseFloat(product.arg3)
        let golesArabia =  parseFloat(product.ara)
        let golesPolonia = parseFloat(product.pol)
        let golesMexico = parseFloat(product.mex)

        

        golesMex.push(golesMexico)
        golesPol.push(golesPolonia)
        golesAra.push(golesArabia) 
        golesArg.push(golesArgentina)
        
        this.verEstadisticas()
        // let arg =  parseInt(product.arg1) + parseInt(product.arg3) + parseInt(product.arg2)
        // console.log(arg)

        // golesArg.push(toString(arg))
    }

    verEstadisticas(){
        console.log(golesArg,
            golesAra,
            golesMex,
            golesPol)
        }


}

module.exports = Producto;