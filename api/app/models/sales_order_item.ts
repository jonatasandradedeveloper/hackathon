class SalesOrderItem{

    id? : number
    id_sale_order : number
    id_product : number
    quantity : number
    productValue : number

    constructor(id_sale_order : number, id_product : number, quantity : number, productValue : number, id? : number){
        this.id = id
        this.id_sale_order = id_sale_order
        this.id_product = id_product
        this.quantity = quantity
        this.productValue = productValue
    }
}

export default SalesOrderItem