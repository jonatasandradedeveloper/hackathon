class Client {
    id? : number
    firstName : string
    lastName : string
    genre : string
    birthDate : Date

    constructor(firstName: string, lastName : string, genre : string, birthDate : Date, id? : number){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.genre = genre,
        this.birthDate = birthDate
    }

}

export default Client