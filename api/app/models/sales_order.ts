class SalesOrder{

    id? : number
    id_client : string
    orderCode : string
    orderDate : Date
    status : string
    discount? : number
    addition? : number
    amount : number

    constructor(id_client : string, orderCode : string, orderDate : Date, status : string,
        amount : number, id? : number, discount? : number, addition? : number){
            this.id = id
            this.id_client = id_client
            this.orderCode = orderCode
            this.orderDate = orderDate
            this.status = status
            this.discount = discount
            this.addition = addition
            this.amount = amount
        }

}

export default SalesOrder