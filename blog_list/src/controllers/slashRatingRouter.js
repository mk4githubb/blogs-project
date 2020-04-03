const ratingRouter = require('express').Router();
const ratingTable = require('../models/ratingSchema');

ratingRouter.get('/', async (request, response, next) => {

    try {
        const foundRatings = await ratingTable.find({});
        const x = foundRatings.map(rating => rating.toJSON());
        response.status(200).send(x);
    } catch (exception) {
        return next(new Error('ConnectionError'));
    }

});

ratingRouter.post('/', async (request, response, next) => {

    try {
        const rating = request.body.rating;
        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

        const newRating = new ratingTable({
            rating: rating,
            ip: ip
        });

        await newRating.save();
        response.status(200).send(newRating.toJSON());
    } catch (exception) {
        return next(new Error('ConnectionError'));
    }
});

module.exports = ratingRouter;