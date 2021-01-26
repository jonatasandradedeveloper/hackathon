const DBA = require('../../config/db')

module.exports = {
    async index(req : any, res : any){
        try{
            const { id } = req.params
            const result = await DBA.select('*').from('adresses').where({id})

            return res.status(200).json(result)

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async loadByClient(req : any, res : any){
        try{
            const { id } = req.params
            const result = await DBA.select('*').from('adresses').where('id_client', id)

            return res.status(200).json(result)
        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async create(req : any, res : any){
        try{
            const { id } = req.params
            const client = await DBA.select('*').from('clients').where({id})
            
            if(client.length === 0){
                return res.status(400).json({message : 'Cliente não localizado'})
            }else{
                const { address, number,  neighborhood, city, complement, uf, typeAddress} = req.body
                await DBA('adresses').insert({
                    id_client: client[0].id,
                    address,
                    number,
                    neighborhood,
                    city,
                    complement,
                    uf,
                    typeAddress
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
            const { address, number,  neighborhood, city, complement, uf, typeAddress} = req.body
            const reg = await DBA.select('*').from('adresses').where({id})
            if(reg.length === 0){
                return res.status(400).json({message : 'Endereço não localizado'})
            }else{
                await DBA('adresses').update({address, number, neighborhood, city, complement, uf, typeAddress}).where({id})
                
            }

            return res.status(204).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async remove(req : any, res : any){
        try{
            const { id } = req.params
            const reg = await DBA.select('*').from('adresses').where({id})
            if(reg.length === 0){
                return res.status(400).json({message : 'Endereço não localizado'})
            }else{
                await DBA('adresses').where({id}).del()
            }
            
            return res.status(204).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    }

}