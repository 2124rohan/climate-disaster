const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
    {
        name1: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value))
                    throw new Error('Email Not Valid!')
            }
        },
        num:{
            type:Number,
            trim:true
        },
        cause:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)
const User = mongoose.model('donetedUser', userSchema)
module.exports = User;