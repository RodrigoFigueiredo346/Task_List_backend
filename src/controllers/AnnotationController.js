const Annotations = require('../models/AnnotationData')

module.exports = {

    //get
    async read (req, res){
        const annotationsList = await Annotations.find({})
        return res.json(annotationsList)
    },

    //post
    async create (req, res){
        const {title, notes, priority} = req.body
        if(!title || ! notes){
            return res.status(400).json({error:"Necessário título e nota preenchidos!"})
        }
        const annotationCreated = await Annotations.create({
            title, notes, priority
        })
        return res.json(annotationCreated)
    },

    async delete (req, res){
        const {id} = req.params
        //console.log(id)
        const annotationDeleted = await Annotations.findOneAndDelete({_id:id})
        if (annotationDeleted){
            return res.send(`O id ${id} foi excluído com sucesso!`)
            // console.log(annotationDeleted)
        }
        return res.send(`Não foi posível excluir o id ${id}!`)
    }

  

}
    