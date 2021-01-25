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

    async indexProd(req : any, res : any) {
        try{
            const { id } = req.params
            const results = await DB.select('*').from('products').where('idcategorie', id)
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
            
            return res.status(200).send()
        }catch(err){
            next(err)
        }
    },

    async update(req : any, res : any, next: any) {
        try{
            const { name, description } = req.body
            const { id } = req.params

            await DB('categories')
            .update({
                name,
                description
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

            await DB('categories')
            .where({ id })
            .del()
            
            return res.status(200).send()
        }catch(err){
            next(err)
        }
    }
    

}