class Contact{

    id? : number
    id_client : number
    contactName : string
    phone : string
    email : string

    constructor(id_client : number, contactName : string, phone : string, email : string, id? : number){
        this.id = id
        this.id_client = id_client
        this.contactName = contactName
        this.phone = phone
        this.email = email
    }
}

export default Contact