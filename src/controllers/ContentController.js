const Annotations = require('../models/AnnotationData')



module.exports = {
    async update (req, res){
        const {notes} = req.body
        const {id} = req.params        

        const noteUpdate = await Annotations.findOne({_id:id})
        
        if (notes) {
            noteUpdate.notes = notes
            await noteUpdate.save()
        }
       return res.json(noteUpdate)
    }

}