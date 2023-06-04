const paginationPlugin = require("@mother/mongoose-cursor-pagination");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    dt: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    ext_id: {
        type: String,
        required: true,
        unique: true
    }
});
ItemSchema.plugin(paginationPlugin);
ItemSchema.index({ date: -1, _id: -1 })

module.exports = mongoose.model('Item', ItemSchema);
