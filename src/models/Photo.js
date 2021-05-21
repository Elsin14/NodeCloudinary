const { Schema,model } = require('mongoose');

const Photo = new Schema({
        title: String,
        descripcion: String,
        imageURL: String,
        public_id: String 
});

module.exports = model('Photo', Photo);
