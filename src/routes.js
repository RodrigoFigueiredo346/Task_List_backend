const express = require('express')
const routes = express.Router()


const AnnotationController = require('./controllers/AnnotationController.js')
const ContentController = require('./controllers/ContentController.js')
const PriorityController = require('./controllers/PriorityController.js')

//annotations
routes.post('/annotations', AnnotationController.create )
routes.get('/', AnnotationController.read )
routes.delete('/annotations/:id', AnnotationController.delete )

//priority
routes.get('/priorities', PriorityController.read )
routes.post('/priorities/:id', PriorityController.update )


//content
routes.post('/content/:id', ContentController.update)


module.exports = routes