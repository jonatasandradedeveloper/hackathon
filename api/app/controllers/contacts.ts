const DBC = require('../../config/db')

module.exports = {
    async index(req : any, res : any){
        try{
            const { id } = req.params
            const result = await DBC.select('*').from('contacts').where({id})

            return res.status(200).json(result)

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async loadByClient(req : any, res : any){
        try{
            const { id } = req.params
            const result = await DBC.select('*').from('contacts').where('id_client', id)

            return res.status(200).json(result)
        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async create(req : any, res : any){
        try{
            const { id } = req.params
            const client = await DBC.select('*').from('clients').where({id})
            
            if(client.length === 0){
                return res.status(400).json({message : 'Cliente não localizado'})
            }else{
                const { contactName, phone, email} = req.body
                await DBA('contacts').insert({
                    id_client: client[0].id,
                    contactName,
                    phone,
                    email
                })
            }

            return res.status(201).send()
                        
        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async update(req : any, res : any){
        try{
            const { id } = req.params
            const { contactName, phone, email} = req.body
            const reg = await DBC.select('*').from('contacts').where({id})
            if(reg.length === 0){
                return res.status(400).json({message : 'Contato não localizado'})
            }else{
                await DBA('adresses').update({ contactName, phone, email }).where({id})
                
            }
            
            return res.status(204).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async remove(req : any, res : any){
        try{
            const { id } = req.params
            const reg = await DBC.select('*').from('contacts').where({id})
            if(reg.length === 0){
                return res.status(400).json({message : 'Contato não localizado'})
            }else{
                await DBA('contacts').where({id}).del()
            }
            
            return res.status(204).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    }

}