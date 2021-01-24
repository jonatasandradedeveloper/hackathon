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
    }

}