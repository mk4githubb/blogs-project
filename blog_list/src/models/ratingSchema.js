const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
   rating:{
       type:Number,
       required:true
   },
    ip:{
       type:String
    }
});

ratingSchema.set('toJSON', {
    transform:(document, toReturn) =>{
        toReturn.id = document._id.toString();
        delete toReturn.__v;
        delete toReturn._id;
    }
});

module.exports = mongoose.model('RatingTable', ratingSchema);