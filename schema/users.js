const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({

    _id: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    nickName: {
        type: String,
        required: true,
        unique: true,
    },
});

const Users = model('users', UsersSchema);
module.exports = Users;