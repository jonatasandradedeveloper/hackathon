class Client {
    pk_customer? : number
    firstName : string
    lastName : string
    genre : string
    birthDate : Date

    constructor(firstName: string, lastName : string, genre : string, birthDate : Date, pkcustomer? : number){
        this.pk_customer = pkcustomer
        this.firstName = firstName
        this.lastName = lastName
        this.genre = genre,
        this.birthDate = birthDate
    }

}

export default Client