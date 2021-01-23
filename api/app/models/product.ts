class Product {

    pk_product? : number
    description : string
    unit : string
    barcode : string
    unitaryValue : number

    constructor(description : string, unit : string, barcode : string, unitaryValue : number, pk_product? : number){
        this.pk_product = pk_product
        this.description = description
        this.unit = unit
        this.barcode = barcode
        this.unitaryValue = unitaryValue
        
    }
}

export default Product