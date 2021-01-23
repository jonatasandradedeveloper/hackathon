class Contact{

    pk_contact? : number
    fk_customer : number
    contactName : string
    phone : string
    email : string

    constructor(fk_customer : number, contactName : string, phone : string, email : string, pk_contact? : number){
        this.pk_contact = pk_contact
        this.fk_customer = fk_customer
        this.contactName = contactName
        this.phone = phone
        this.email = email
    }
}

export default Contact