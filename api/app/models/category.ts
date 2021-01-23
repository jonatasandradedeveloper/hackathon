class Category {
    id? : number
    name : string
    descriptio : string

    constructor(name : string, description : string, id? : number){
        this.id = id;
        this.name = name
        this.descriptio = description
    }
}

export default Category