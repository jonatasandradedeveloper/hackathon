class Address {
    
    pk_address? : number
    fk_customer : number
    address : string
    number : string
    neighborhood : string
    city : string
    complement : string
    uf : string
    typeAddress : string

    constructor(fk_customer : number, address : string, number : string, neighborhood : string, city : string, 
        complement : string, uf : string, typeAddress : string, pk_address? : number){
            
            this.pk_address = pk_address
            this.fk_customer = fk_customer
            this.address = address
            this.number = number
            this.neighborhood = neighborhood
            this.city = city
            this.complement = complement
            this.uf = uf
            this.typeAddress = typeAddress
    }

}

export default Address