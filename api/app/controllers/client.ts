import Client from '../models/client'
import DB from '../../config/db'

module.exports = (app : any) => {
    const get = async(req : any, res : any) => {
        try{

            const query = "SELECT * FROM clients";
            DB.query(query, (err: Error, results: Object[]) => {
                if(err){
                    return res.status(400).json({err});

                }else{
                    res.status(201).json({results})
                }
            });

        }catch(err){
            res.status(500).json({message : err.message})
        }
    }

    return {get}
}