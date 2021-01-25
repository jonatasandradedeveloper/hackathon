import Product from '../models/product';
const DB = require('../../config/db')

module.exports ={
    async index(req : any, res : any) {
        try{
            const results = await DB.select('*').from('products')
            return res.json(results)
        }catch(err){
            res.status(500).json({message : err.message})
        }
    },

    async create(req : any, res : any, next: any) {
        try{
            const { name, idcategorie, description, unit, code, unitaryvalue, url } = req.body
            await DB('products').insert({
                name, 
                idcategorie, 
                description, 
                unit, 
                code, 
                unitaryvalue,
                url
            })
            
            return res.status(200).send()
        }catch(err){
            next(err)
        }
    },

    async update(req : any, res : any, next: any) {
        try{
            const { name, idcategorie, description, unit, code, unitaryvalue, url } = req.body
            const { id } = req.params

            await DB('products')
            .update({
                name, 
                idcategorie, 
                description, 
                unit, 
                code, 
                unitaryvalue,
                url
            })
            .where({ id })
            
            return res.status(200).send()
        }catch(err){
            next(err)
        }
    },

    async delete(req : any, res : any, next: any) {
        try{
            const { id } = req.params

            await DB('products')
            .where({ id })
            .del()
            
            return res.status(200).send()
        }catch(err){
            next(err)
        }
    }

}