class SalesOrderItem{

    pk_orderItem? : number
    fk_order : number
    fk_product : number
    quantity : number
    productValue : number

    constructor(fk_order : number, fk_product : number, quantity : number, productValue : number, pk_orderItem? : number){
        this.pk_orderItem = pk_orderItem
        this.fk_order = fk_order
        this.fk_product = fk_product
        this.quantity = quantity
        this.productValue = productValue
    }
}