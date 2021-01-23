class Product {

    id? : number
    id_category? : number
    description : string
    unit : string
    barcode : string
    unitaryValue : number

    constructor(description : string, unit : string, barcode : string, unitaryValue : number, id? : number, id_category? : number){
        this.id = id
        this.id_category = id_category
        this.description = description
        this.unit = unit
        this.barcode = barcode
        this.unitaryValue = unitaryValue
        
    }
}

export default Product