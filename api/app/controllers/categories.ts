import Category from '../models/category';
const DB = require('../../config/db')

module.exports ={
    async index(req : any, res : any) {
        try{
            const results = await DB.select('*').from('categories')
            return res.json(results)
        }catch(err){
            res.status(500).json({message : err.message})
        }
    },

    async create(req : any, res : any, next: any) {
        try{
            const { name, description } = req.body
            await DB('categories').insert({
                name,
                description
            })
            
            return res.status(201).send()
        }catch(err){
            next(err)
        }
    }
    

}