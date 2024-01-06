const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: String,
    password: String,
    fullname: String
})

const peopleSchema = new Schema({
    id_person: Number,
    name: String,
    recog: Number
})

const Admin = mongoose.model('admins', adminSchema)
const People = mongoose.model('peoples', peopleSchema)

const mySchema = {
    'admins': Admin,
    'people': People
}
module.exports = mySchema