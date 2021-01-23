class Address {
    
    id? : number
    id_client : number
    address : string
    number : string
    neighborhood : string
    city : string
    complement : string
    uf : string
    typeAddress : string

    constructor(id_client : number, address : string, number : string, neighborhood : string, city : string, 
        complement : string, uf : string, typeAddress : string, id? : number){
            
            this.id = id
            this.id_client = id_client
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