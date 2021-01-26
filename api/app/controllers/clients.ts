const DB = require('../../config/db')

module.exports ={
    async index(req : any, res : any) {
        try{
            const results = await DB.select('*').from('clients')
            return res.status(200).json(results)
        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async create(req : any, res : any){
        try{
            const { firstName, lastName, genre, birthDate } = req.body
            const { address, number,  neighborhood, city, complement, uf, typeAddress} = req.body.adresses
            const { contactName, phone, email} = req.body.contact;
            
            const id_client = await DB('clients').insert({
                firstName, 
                lastName, 
                genre, 
                birthDate
            })
            
            if(id_client){
                await DB('adresses').insert({
                    id_client,
                    address,
                    number,
                    neighborhood,
                    city,
                    complement,
                    uf,
                    typeAddress                    
                })

                await DB('contacts').insert({
                    id_client,
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

    async loadClient(req : any, res : any){
        try{
            const { id } = req.params;
            const cli = await DB.select('*').from('clients').where({id})

            if(cli.length === 0){
                return res.status(400).json({message : 'Cliente não localizado'})
            }else{
                const adresses = await DB.select('*').from('adresses').where('id_client', id)
                const contacts = await DB.select('*').from('contacts').where('id_client', id)
                cli[0].Adresses = adresses
                cli[0].Contacts = contacts
                return res.status(200).json(cli)    
            }
            
        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async update(req : any, res : any){
        try{
            const { id } = req.params
            const { firstName, lastName, genre, birthDate } = req.body
            await DB('clients').update({firstName, lastName, genre, birthDate}).where({id})

            return res.status(204).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    },

    async remove(req : any, res : any){
        try{

            const { id } = req.params
            const cli = await DB.select('*').from('clients').where({id})
            const orders = await DB.select('*').from('sales_order').where('id_client', id)

            if(cli.length === 0){
                return res.status(400).json({message : 'Cliente não localizado'})
            }
          
            if(orders.length > 0){
                res.status(400).json({message : 'O cliente possui pedidos vinculados, não é possível excluir o cadastro.'})
            }else{
                await DB('adresses').where('id_client', id).del()
                await DB('contacts').where('id_client', id).del()
                await DB('clients').where({id}).del()
            }

            return res.status(200).send()

        }catch(err){
            return res.status(500).json({message : err.message})
        }
    }

    
}