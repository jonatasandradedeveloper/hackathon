class SalesOrder{

    pk_order? : number
    fk_customer : string
    orderCode : string
    orderDate : Date
    status : string
    discount? : number
    addition? : number
    amount : number

    constructor(fk_customer : string, orderCode : string, orderDate : Date, status : string,
        amount : number, pk_order? : number, discount? : number, addition? : number){
            this.pk_order = pk_order
            this.fk_customer = fk_customer
            this.orderCode = orderCode
            this.orderDate = orderDate
            this.status = status
            this.discount = discount
            this.addition = addition
            this.amount = amount
        }

}