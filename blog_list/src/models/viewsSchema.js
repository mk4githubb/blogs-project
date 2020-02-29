const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
   pageViews:{
       type: Number,
       required: true
   }
});

viewSchema.set('toJSON', {
    transform: (document, toReturn) => {
        toReturn.id = document._id.toString();
        delete toReturn.__v;
        delete toReturn._id
    }
});

module.exports = mongoose.model('PageViewsTable', viewSchema);