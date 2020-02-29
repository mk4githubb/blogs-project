const viewsRouter = require('express').Router();
const viewTable = require('../models/viewsSchema');

viewsRouter.get('/', async (request, response, next) => {
    try{
        const views = await viewTable.findById('5e56f852a88e6883d4744784');
        response.status(200).send(views.toJSON());
    }
    catch (exception) {
        return next(new Error('ConnectionError'))
    }
});


viewsRouter.post('/', async (request, response, next) => {

    try{
        const newLikes = await viewTable.findByIdAndUpdate('5e56f852a88e6883d4744784', {$inc:{pageViews:1}}, {new:true})
        response.status(200).send(newLikes.toJSON())
    }
    catch (exception) {
        return next(new Error('ConnectionError'))
    }
});
module.exports = viewsRouter;
